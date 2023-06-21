import { StyleSheet } from "react-native";
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const mainStyle = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export const theme1 = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7900FF',
    secondary: '#548CFF',
    background: "#CFFFDC",
    backdrop: "#000000DD",
    onSurface: "#000000",
  },
};

export const theme2 = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ebd9b7',
    secondary: '#548CFF',
    background: "#121212",
    onSurface: "#ebd9b7",
    secondaryContainer: "red",
    backdrop: "#000000DD",
  },
};