import React, { useContext } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { FoodCalendarContext } from "../context/FoodCalendarContext";

const MealPlanning = () => {
  const { dates } = useContext(FoodCalendarContext);

  const getFoodsJSONString = () => {
    return JSON.stringify(dates);
  };

  return (
    <View>
      <Text>{getFoodsJSONString()}</Text>
      <Button onPress={() => console.log("Pressed Food database")}>
        Touch me Meal Planning
      </Button>
    </View>
  );
};

export default MealPlanning;
