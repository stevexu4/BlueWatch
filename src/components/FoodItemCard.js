import React from "react";
import { Card, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const FoodItemCard = ({ food, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Card mode="outlined">
      <Card.Content>
        <Text variant="titleLarge">{food.label}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: food.image }} />
    </Card>
  </TouchableOpacity>
);

export default FoodItemCard;
