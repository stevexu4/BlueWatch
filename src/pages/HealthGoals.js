import React, { useState, useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, TextInput, Button, RadioButton } from "react-native-paper";
import { HealthGoalsContext } from "../context/HealthGoalsContext";

const HealthGoals = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [healthGoal, setHealthGoal] = useState("");

  const { caloricIntake, updateCaloricIntake } = useContext(HealthGoalsContext);

  const handleFormSubmit = () => {
    if (!isFormValid()) {
      alert("Please fill in all fields");
      return;
    }

    const bmr = calculateBMR();

    const totalCaloricIntake = adjustCaloricIntakeBasedOnGoal(bmr);
    updateCaloricIntake(totalCaloricIntake);
  };

  const calculateBMR = () => {
    let bmr = 0;

    if (gender === "male") {
      bmr =
        88.362 +
        13.397 * Number(weight) +
        4.799 * Number(height) -
        5.677 * Number(age);
    } else if (gender === "female") {
      bmr =
        447.593 +
        9.247 * Number(weight) +
        3.098 * Number(height) -
        4.33 * Number(age);
    }

    let adjustedBMR = 0;

    switch (activityLevel) {
      case "sedentary":
        adjustedBMR = bmr * 1.2;
        break;
      case "light":
        adjustedBMR = bmr * 1.375;
        break;
      case "moderate":
        adjustedBMR = bmr * 1.55;
        break;
      case "heavy":
        adjustedBMR = bmr * 1.725;
        break;
      case "extraActive":
        adjustedBMR = bmr * 1.9;
        break;
      default:
        adjustedBMR = bmr;
        break;
    }

    return adjustedBMR;
  };

  const adjustCaloricIntakeBasedOnGoal = (bmr) => {
    let adjustedCaloricIntake = bmr;

    switch (healthGoal) {
      case "loss":
        adjustedCaloricIntake -= adjustedCaloricIntake * 0.1;
        break;
      case "maintenance":
        // no adjustment needed
        break;
      case "gain":
        adjustedCaloricIntake += adjustedCaloricIntake * 0.1;
        break;
      default:
        break;
    }

    return Math.round(adjustedCaloricIntake);
  };

  const isFormValid = () => {
    return (
      age !== "" &&
      gender !== "" &&
      height !== "" &&
      weight !== "" &&
      activityLevel !== "" &&
      healthGoal !== ""
    );
  };

  const renderRadioButtons = (options, selectedValue, onValueChange) => {
    return options.map((option) => (
      <View style={styles.radioButton} key={option.value}>
        <RadioButton.Item label={option.label} value={option.value} />
      </View>
    ));
  };

  const activityLevelOptions = [
    { label: "Sedentary", value: "sedentary" },
    { label: "Light Exercise", value: "light" },
    { label: "Moderate Exercise", value: "moderate" },
    { label: "Heavy Exercise", value: "heavy" },
    { label: "Extra Active", value: "extraActive" },
  ];

  const healthGoalOptions = [
    { label: "Weight Loss", value: "loss" },
    { label: "Weight Maintenance", value: "maintenance" },
    { label: "Weight Gain", value: "gain" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {caloricIntake !== 0 && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your Daily Caloric Intake:</Text>
          <Text style={styles.resultValue}>{caloricIntake} calories</Text>
        </View>
      )}
      <TextInput
        mode="outlined"
        label="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        mode="outlined"
        label="Height"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        mode="outlined"
        label="Weight"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <View style={styles.genderContainer}>
        <RadioButton.Group onValueChange={setGender} value={gender}>
          <View style={styles.radioButton}>
            <RadioButton.Item label="Male" value="male" />
          </View>
          <View style={styles.radioButton}>
            <RadioButton.Item label="Female" value="female" />
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.radioButtonContainer}>
        <Text>Activity Level:</Text>
        <RadioButton.Group
          onValueChange={setActivityLevel}
          value={activityLevel}
        >
          {renderRadioButtons(
            activityLevelOptions,
            activityLevel,
            setActivityLevel
          )}
        </RadioButton.Group>
      </View>

      <View style={styles.radioButtonContainer}>
        <Text>Health Goal:</Text>
        <RadioButton.Group onValueChange={setHealthGoal} value={healthGoal}>
          {renderRadioButtons(healthGoalOptions, healthGoal, setHealthGoal)}
        </RadioButton.Group>
      </View>

      <Button
        mode="contained"
        onPress={handleFormSubmit}
        disabled={!isFormValid()}
        style={styles.submitButton}
      >
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  genderContainer: {
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 8,
  },
  radioButtonContainer: {
    marginTop: 16,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  submitButton: {
    marginTop: 24,
  },
  resultContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resultValue: {
    fontSize: 24,
    marginTop: 8,
  },
});

export default HealthGoals;
