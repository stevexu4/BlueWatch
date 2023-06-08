import { StyleSheet } from "react-native";
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const mainStyle = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7900FF',
    secondary: '#548CFF',
    background: "#CFFFDC"
    
  },
};
