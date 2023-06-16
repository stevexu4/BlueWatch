import React, { useState } from "react";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { fetchFoodData } from "../services/apiService";

const FoodDatabase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foodData, setFoodData] = useState(null);

  const handlePress = async () => {
    try {
      const data = await fetchFoodData(searchQuery);
      setFoodData(data["hints"]);
    } catch (error) {
      console.error("Error searching for food:", error);
    }
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
          <Card mode="outlined">
            <Card.Content>
              <Text variant="titleLarge">{data.food.label}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: data.food.image }} />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodDatabase;
