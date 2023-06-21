import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const NumberInput = ({ label }) => {
  const [number, setNumber] = useState("100");

  return (
    <TextInput
      label={label}
      value={number}
      onChangeText={setNumber}
      keyboardType="numeric"
      mode="outlined"
    />
  );
};

export default NumberInput;
