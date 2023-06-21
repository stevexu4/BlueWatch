import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const NumberInput = ({ label, onChange }) => {
  const [number, setNumber] = useState("100");

  const handleNumberChange = (value) => {
    setNumber(value);
    onChange(value);
  };

  return (
    <TextInput
      label={label}
      value={number}
      onChangeText={handleNumberChange}
      keyboardType="numeric"
      mode="outlined"
    />
  );
};

export default NumberInput;
