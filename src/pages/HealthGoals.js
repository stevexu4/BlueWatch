import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput, HelperText, Button, RadioButton } from "react-native-paper";

const HealthGoals = () => {
  const [Age, setAge] = React.useState("");
  const [Gender, setGender] = React.useState(0);
  const [Height, setHeight] = React.useState("");
  const [Weight, setWeight] = React.useState("");
  const [ActivityLevel, setActivityLevel] = React.useState("");
  const [HealthGoal, setHealthGoal] = React.useState("");

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted!");
    console.log("Age:", Age);
    console.log("Gender:", Gender);
    console.log("Height:", Height);
    console.log("Weight:", Weight);
    console.log("Activity Level:", ActivityLevel);
    console.log("Health Goal:", HealthGoal);
  };

  const handleAgeChange = (number) => {
    setAge(number);
  };

  const handleGenderChange = (number) => {
    const gender = "UNDEFINED";
    switch (number) {
      case 1:
        gender = "FEMALE";
        break;
      case 2:
        gender = "MALE";
        break;
    }
    setGender(gender);
  };

  const handleHeightChange = (number) => {
    setHeight(number);
  };

  const handleWeightChange = (number) => {
    setWeight(number);
  };

  const handleActivityLevelChange = (number) => {
    const activityLevel = "";
    switch (number) {
      case 1:
        activityLevel = "SEDENTARY";
        break;
      case 2:
        activityLevel = "LIGHT";
        break;
      case 3:
        activityLevel = "MODERATE";
        break;
      case 4:
        activityLevel = "HEAVY";
        break;
      case 5:
        activityLevel = "EXTRA";
        break;
    }
    setActivityLevel(activityLevel);
  };

  const handleHealthGoalChange = (number) => {
    const healthGoal = "";
    switch (number) {
      case 1:
        healthGoal = "LOSE";
        break;
      case 2:
        healthGoal = "MAINTAIN";
        break;
      case 3:
        healthGoal = "GAIN";
        break;
    }
    setHealthGoal(healthGoal);
  };

  const ageOptions = [];
  for (let i = 1; i <= 100; i++) {
    ageOptions.push("" + i);
  }

  const ageHasError = () => {
    return !isNaN(Age);
  };

  const genderHasError = () => {};

  const heightHasError = () => {};

  const weightHasError = () => {};

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TextInput
            mode="outlined"
            label="Age"
            value={Age}
            onChangeText={(text) => setAge(text)}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            mode="outlined"
            label="Height"
            value={Height}
            onChangeText={(text) => setHeight(text)}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            mode="outlined"
            label="Weight"
            value={Weight}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.frame}>
          <HelperText type="info" style={styles.helperText}>
            Select your activity level:
          </HelperText>
          <RadioButton.Group
            onValueChange={(value) => setGender(value)}
            value={Gender}
          >
            <View style={styles.radioButton}>
              <RadioButton value="1" />
              <HelperText>Female</HelperText>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="2" />
              <HelperText>Male</HelperText>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.frame}>
          <HelperText type="info" style={styles.helperText}>
            Select your activity level:
          </HelperText>
          <RadioButton.Group
            onValueChange={(value) => setActivityLevel(value)}
            value={ActivityLevel}
          >
            <View style={styles.radioButton}>
              <RadioButton value="1" />
              <HelperText>Sedentary</HelperText>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="2" />
              <HelperText>Light Exercise</HelperText>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="3" />
              <HelperText>Moderate Exercise</HelperText>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="4" />
              <HelperText>Heavy Exercise</HelperText>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="5" />
              <HelperText>Extra Active</HelperText>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.frame}>
          <HelperText type="info" style={styles.helperText}>
            Select your health goal:
          </HelperText>
          <RadioButton.Group
            onValueChange={(value) => setHealthGoal(value)}
            value={HealthGoal}
          >
            <View style={styles.radioButton}>
              <RadioButton value="1" />
              <HelperText>Weight Loss</HelperText>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="2" />
              <HelperText>Weight Maintenance</HelperText>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="3" />
              <HelperText>Weight Gain</HelperText>
            </View>
          </RadioButton.Group>
        </View>
        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Submit
        </Button>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  frame: {
    borderRadius: 4,
    borderWidth: 0.5,
    margin: 4,
  },
  input: {
    marginBottom: 16,
  },
  helperText: {
    marginBottom: 8,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default HealthGoals;
