import { View } from "react-native";
import { Title, Text } from "react-native-paper";
import FoodInfo from "./FoodInfo";

const MealTimeType = ({ mealTimeType, mealItems }) => {
    
  const calculateTotalCalories = () => {
    let totalCalories = 0;
    mealItems.forEach((meal) => {
      const { food, weight } = meal;
      const calories = food.nutrients.ENERC_KCAL;
      totalCalories += (calories / 100) * weight;
    });
    return totalCalories.toFixed(0);
  };

  return (
    <View key={mealTimeType}>
      <Title>{mealTimeType} :</Title>
      {mealItems.map((meal, index) => (
        <FoodInfo key={index} meal={meal} index={index} />
      ))}
      <Text>Total Calories: {calculateTotalCalories()}</Text>
    </View>
  );
};

export default MealTimeType;
