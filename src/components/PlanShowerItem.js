import React from "react";
import { View } from "react-native";
import MealPlannerCard from "./MealPlannerCard";

const PlanShowerItem = ({ dates }) => {
  return (
    <View>
      {Object.entries(dates).map(([date, meals]) => (
        <View key={date} style={{ margin: 10, padding: 10, marginBottom: 10 }}>
          <MealPlannerCard key={date} date={date} meals={meals} />
        </View>
      ))}
    </View>
  );
};

export default PlanShowerItem;
