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
  },
};

export const theme2 = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7900FF',
    secondary: '#548CFF',
    background: "#121212",
    onSurface: "#ebd9b7"
  },
};