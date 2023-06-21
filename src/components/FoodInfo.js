import { View } from "react-native";
import { Paragraph, Text } from "react-native-paper";

const FoodInfo = ({ meal, index }) => {
  const { food } = meal;
  const { weight } = meal;

  const calculateTotalCalories = () => {
    const { ENERC_KCAL } = food.nutrients;
    const totalCalories = (ENERC_KCAL / 100) * weight;
    return totalCalories;
  };

  const { nutrients } = food;
  return (
    <View key={index}>
      <Paragraph>{food.label} :</Paragraph>
      <Text>Weight to eat : { weight }</Text>
      <Text>Calories for weight : {calculateTotalCalories()}</Text>
      <Text>Protein: { nutrients.PROCNT}</Text>
      <Text>Fat: { nutrients.FAT}</Text>
      <Text>Carbs: { nutrients.CHOCDF}</Text>
    </View>
  );
};

export default FoodInfo;
