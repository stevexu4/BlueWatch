import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { theme } from "../styles/appStyle";
import HealthGoals from "../pages/HealthGoals";
import FoodDatabase from "../pages/FoodDatabase";
import MealPlanning from "../pages/MealPlanning";

const BottomTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "healthGoals",
      title: "Health Goals",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "foodDatabase",
      title: "Food Database",
      focusedIcon: "food-apple",
      unfocusedIcon: "food-apple-outline",
    },
    {
      key: "mealPlanning",
      title: "Meal Planning",
      focusedIcon: "calendar-text",
      unfocusedIcon: "calendar-clock-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    healthGoals: HealthGoals,
    foodDatabase: FoodDatabase,
    mealPlanning: MealPlanning,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: theme.colors.background }}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.accent}
    />
  );
};

export default BottomTabs;
