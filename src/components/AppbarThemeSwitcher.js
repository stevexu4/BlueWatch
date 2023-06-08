import React, { useState, useContext } from "react";
import { Appbar, Text } from "react-native-paper";
import ThemeContext from "../context/ThemeContext";

export default function AppbarThemeSwitcher({actualTheme}) {
  const { toggleStyle } = useContext(ThemeContext);

  const [icon, setIcon] = useState("glasses");

  const handleIconClick = () => {
    setIcon(icon === "sunglasses" ? "glasses" : "sunglasses");
    toggleStyle();
  };

  return (
    <Appbar mode="small" style={{ backgroundColor: actualTheme.colors.background }}>
      <Appbar.Content title="Blue Watch" style={{color:actualTheme.colors.text }}/>
      <Appbar.Action icon={icon} onPress={handleIconClick} />
    </Appbar>
  );
}
