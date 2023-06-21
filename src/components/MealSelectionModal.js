import React, { useState } from "react";
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

const MealSelectionModal = ({ visible, onDismiss, onSubmit, selectedFood }) => {
  const [inputDate, setInputDate] = React.useState(undefined);
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");
  const [inputWeight, setInputWeight] = useState("100");

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

    const formData = {
      food: selectedFood,
      weight: inputWeight,
      date: inputDate,
      meal: selectedMeal,
    };
    onSubmit(formData);
    console.log(formData);
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
