import { View } from "react-native";
import { Card, Title, Text } from "react-native-paper";
import { formatDate } from "../utils/date";
import MealTimeType from "../components/MealTimeType";

const MealPlannerCard = ({ date, meals }) => {
  const calculateTotalCaloriesPerDay = () => {
    let totalCalories = 0;
    Object.values(meals).forEach((mealItems) => {
      mealItems.forEach((meal) => {
        const { food, weight } = meal;
        const calories = food.nutrients.ENERC_KCAL;
        totalCalories += (calories / 100) * weight;
      });
    });
    return totalCalories.toFixed(2); // Round to 2 decimal places
  };

  return (
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
        <View style={{marginTop:10}}>
          <Text>Total Calories Per Day: {calculateTotalCaloriesPerDay()}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default MealPlannerCard;
