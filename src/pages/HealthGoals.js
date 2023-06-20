import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, RadioButton } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { HealthGoalsContext } from "../context/ThemeContext";

const HealthGoals = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [healthGoal, setHealthGoal] = useState("");

  const handleSubmit = () => {
    const userBMR = calculateBMR(
      parseInt(age),
      gender,
      parseInt(height),
      parseInt(weight),
      activityLevel
    );

    let adjustedCaloricIntake = 0;

    switch (healthGoal) {
      case "loss":
        adjustedCaloricIntake = userBMR * 0.9;
        break;
      case "gain":
        adjustedCaloricIntake = userBMR * 1.1;
        break;
      case "maintenance":
      default:
        adjustedCaloricIntake = userBMR;
        break;
    }

    // Process the form data and adjustedCaloricIntake here
    console.log("Form submitted:", {
      age,
      gender,
      height,
      weight,
      activityLevel,
      healthGoal,
      userBMR,
      adjustedCaloricIntake,
    });
  };

  const calculateBMR = (age, gender, height, weight, activityLevel) => {
    let bmr = 0;

    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === "female") {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
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

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <TextInput
        mode="outlined"
        label="Height"
        value={height}
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
      />
      <TextInput
        mode="outlined"
        label="Weight"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
      />

      <View style={styles.genderContainer}>
        <RadioButton.Group
          onValueChange={(value) => setGender(value)}
          value={gender}
        >
          <View style={styles.radioButton}>
            <RadioButton.Item label="Male" value="male" />
          </View>
          <View style={styles.radioButton}>
            <RadioButton.Item label="Female" value="female" />
          </View>
        </RadioButton.Group>
      </View>
      <Picker
        mode="dialog"
        selectedValue={activityLevel}
        onValueChange={(value) => setActivityLevel(value)}
      >
        <Picker.Item label="Sedentary" value="sedentary" />
        <Picker.Item label="Light Exercise" value="light" />
        <Picker.Item label="Moderate Exercise" value="moderate" />
        <Picker.Item label="Heavy Exercise" value="heavy" />
        <Picker.Item label="Extra Active" value="extraActive" />
      </Picker>
      <Picker
        mode="dialog"
        selectedValue={healthGoal}
        onValueChange={(value) => setHealthGoal(value)}
      >
        <Picker.Item label="Weight Loss" value="loss" />
        <Picker.Item label="Weight Maintenance" value="maintenance" />
        <Picker.Item label="Weight Gain" value="gain" />
      </Picker>
      <Button mode="contained" onPress={handleSubmit} disabled={!isFormValid()}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  genderContainer: {
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 8,
  },
});

export default HealthGoals;
