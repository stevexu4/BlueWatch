import React, { useContext } from "react";
import { ScrollView, View } from "react-native";
import { FoodCalendarContext } from "../context/FoodCalendarContext";
import PlanShowerItem from "../components/PlanShowerItem";

const MealPlanning = () => {
  const { dates } = useContext(FoodCalendarContext);

  return (
    <View>
      <ScrollView>
        <PlanShowerItem dates={dates}/>
      </ScrollView>
    </View>
  );
};

export default MealPlanning;
