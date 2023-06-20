import React, { useState, useContext } from "react";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { fetchFoodData } from "../services/apiService";
import { TouchableOpacity } from "react-native";
import { FoodCalendarContext } from "../context/FoodCalendarContext";

const FoodDatabase = () => {
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleFoodItemClick = (foodItem) => {
    addFoodToDate("2023-06-12", foodItem);
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Enter food item"
      />
      <Button onPress={handlePress}>Touch me Food DB</Button>
      <ScrollView>
        {foodData && foodData.map((data, index) => (
          // https://react.dev/learn/rendering-lists#why-does-react-need-keys
          // TLDR : Specifying key allows react to render better
          // Warning if not set
          <TouchableOpacity key={index} onPress={() => handleFoodItemClick(data.food)} >
            <Card mode="outlined">
              <Card.Content>
                <Text variant="titleLarge">{data.food.label}</Text>
              </Card.Content>
              <Card.Cover source={{ uri: data.food.image }} />
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodDatabase;
