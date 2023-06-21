import React, { useContext } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { FoodCalendarContext } from "../context/FoodCalendarContext";
import ThemeContext from "../context/ThemeContext";

const MealPlanning = () => {
  const { dates } = useContext(FoodCalendarContext);
  const { setIndex } = useContext(ThemeContext);

  const getFoodsJSONString = () => {
    return JSON.stringify(dates);
  };

  const navigateToFoodDatabase = () => {
    setIndex(0);
  };

  return (
    <View>
      <Text>{getFoodsJSONString()}</Text>
      <Button onPress={navigateToFoodDatabase}>
        Touch me Go to Food Database
      </Button>
    </View>
  );
};

export default MealPlanning;
