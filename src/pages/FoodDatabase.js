import React, { useState, useContext } from "react";
import { Button, TextInput } from "react-native-paper";
import { FlatList, View } from "react-native";
import { fetchFoodData } from "../services/apiService";
import { FoodCalendarContext } from "../context/FoodCalendarContext";
import FoodItemCard from "../components/FoodItemCard";

const FoodDatabase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foodData, setFoodData] = useState(null);
  const { addFoodToDate } = useContext(FoodCalendarContext);

  const handlePress = async () => {
    try {
      const data = await fetchFoodData(searchQuery);
      setFoodData(data["hints"]);
    } catch (error) {
      console.error("Error searching for food:", error);
    }
  };

  const handleFoodItemCardClick = (foodItem) => {
    addFoodToDate("2023-06-12", foodItem);
  };

  const renderItem = ({ item }) => (
    <FoodItemCard
      food={item.food}
      onPress={() => handleFoodItemCardClick(item.food)}
    />
  );

  return (
    <View>
      <TextInput
        mode="outlined"
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Enter food item"
      />
      <Button onPress={handlePress}>Search for a food</Button>
      <FlatList
        data={foodData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FoodDatabase;
