import React from "react";
import { View } from "react-native";
import { SegmentedButtons, Text, Portal, Modal, useTheme  } from "react-native-paper";

const MealSelectionModal = ({
  visible,
  onDismiss,
  selectedMeal,
  onMealSelect,
  selectedFood,
}) => {
    const theme = useTheme();
    const style = {
      margin: 20,
      padding: 20,
      borderRadius: 20,
      backgroundColor: theme.colors.background,
    };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={style}>
        <View>
          <Text>{selectedFood.label}</Text>
          <Text>Select a meal:</Text>
          <SegmentedButtons 
            value={selectedMeal}
            onValueChange={onMealSelect}
            buttons={[
              { value: "Breakfast", label: "Breakfast" },
              { value: "Lunch", label: "Lunch" },
              { value: "Snack", label: "Snack" },
              { value: "Dinner", label: "Dinner" },
            ]}
          />
        </View>
      </Modal>
    </Portal>
  );
};

export default MealSelectionModal;
