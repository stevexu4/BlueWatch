import React from "react";
import { View } from "react-native";
import { Card, Title } from "react-native-paper";
import { formatDate } from "../utils/date";
import MealTimeType from "./MealTimeType";

const MealPlannerCard = ({ date, meals }) => (
  <Card key={date}>
    <Card.Content>
      <Title>{formatDate(date)}</Title>
      {Object.entries(meals).map(([mealTimeType, mealItems]) => (
        <MealTimeType
          key={mealTimeType}
          mealTimeType={mealTimeType}
          mealItems={mealItems}
        />
      ))}
    </Card.Content>
  </Card>
);

const PlanShowerItem = ({dates}) => {

  return (
    <View>
      {Object.entries(dates).map(([date, meals]) => (
        <View style={{margin:10, padding:10, marginBottom:10}}>
            <MealPlannerCard key={date} date={date} meals={meals} />
        </View>
      ))}
    </View>
  );
};

export default PlanShowerItem;
