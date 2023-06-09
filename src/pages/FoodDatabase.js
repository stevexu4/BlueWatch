import React, { useState, useContext } from "react";
import { Button, TextInput } from "react-native-paper";
import { FlatList, View, StyleSheet } from "react-native";
import { fetchFoodData } from "../services/apiService";
import { FoodCalendarContext } from "../context/FoodCalendarContext";
import FoodItemCard from "../components/FoodItemCard";
import MealSelectionModal from "../components/MealSelectionModal";

const FoodDatabase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foodData, setFoodData] = useState(null);

  const [selectedFood, setSelectedFood] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = async () => {
    try {
      const data = await fetchFoodData(searchQuery);
      setFoodData(data["hints"]);
    } catch (error) {
      console.error("Error searching for food:", error);
    }
  };

  const handleFoodItemCardClick = (foodItem) => {
    setModalVisible(true);
    setSelectedFood(foodItem);
  };

  const renderItem = ({ item }) => (
    <FoodItemCard
      food={item.food}
      onPress={() => handleFoodItemCardClick(item.food)}
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Enter food item"
        style={styles.textInput}
      />
      <Button onPress={handlePress}>Search for a food</Button>
      <FlatList
        data={foodData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />

      {selectedFood && (
        <MealSelectionModal
          visible={modalVisible}
          setVisible={setModalVisible}
          onDismiss={() => setModalVisible(false)}
          selectedFood={selectedFood}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  textInput: {
    width: "90%",
    marginBottom: 10,
  },
});

export default FoodDatabase;
