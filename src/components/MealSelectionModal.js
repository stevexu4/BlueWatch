import React, { useState, useContext } from "react";
import { View } from "react-native";
import {
  SegmentedButtons,
  Button,
  Text,
  Portal,
  Modal,
  useTheme,
} from "react-native-paper";

// Setup translation
import { fr, registerTranslation } from "react-native-paper-dates";
registerTranslation("fr", fr);
import { DatePickerInput } from "react-native-paper-dates";

import NumberInput from "./NumberInput";
import ThemeContext from "../context/ThemeContext";
import { FoodCalendarContext } from "../context/FoodCalendarContext";


const MealSelectionModal = ({ visible, setVisible, onDismiss, onSubmit, selectedFood }) => {
  const [inputDate, setInputDate] = React.useState(undefined);
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");
  const [inputWeight, setInputWeight] = useState("100");
  const { setIndex } = useContext(ThemeContext);

  const { addFoodToDate } = useContext(FoodCalendarContext);

  const navigateToMealPlanning = () => {
    setIndex(2);
  }

  const theme = useTheme();
  const style = {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: theme.colors.background,
  };

  const handleFormSubmit = () => {
    // Need to handle errors somehow
    // @TODO
    if (!inputDate || !inputWeight) {
      return;
    }

    addFoodToDate(inputDate, selectedMeal, selectedFood, inputWeight)
    navigateToMealPlanning();
    setVisible(false);
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={style}
      >
        <View>
          <Text>Food : {selectedFood.label}</Text>
          <Text>Select the weight in grams</Text>
          <NumberInput label="Grams (g)" onChange={setInputWeight} />
          <Text>Select a date</Text>
          <DatePickerInput
            mode="outlined"
            locale="fr"
            label="Date"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="start"
          />
          <Text>Select a meal:</Text>
          <SegmentedButtons
            value={selectedMeal}
            onValueChange={setSelectedMeal}
            buttons={[
              { value: "Breakfast", label: "Breakfast" },
              { value: "Lunch", label: "Lunch" },
              { value: "Snack", label: "Snack" },
              { value: "Dinner", label: "Dinner" },
            ]}
          />
          <Button onPress={handleFormSubmit}>Submit</Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default MealSelectionModal;
