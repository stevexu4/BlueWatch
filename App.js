import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import BottomTabs from "./src/navigation/BottomTabs";
import { mainStyle, theme1, theme2 } from "./src/styles/appStyle";
import AppbarThemeSwitcher from "./src/components/AppbarThemeSwitcher";
import ThemeContext from "./src/context/ThemeContext";
import { FoodCalendarCalendarProvider } from "./src/context/FoodCalendarContext";
import HealthGoals from "./src/pages/HealthGoals";
import { HealthGoalsProvider } from "./src/context/HealthGoalsContext";

export default function App() {
  const [actualTheme, setactualTheme] = useState(theme1);
  const [index, setIndex] = useState(0);

  const toggleStyle = () => {
    setactualTheme(actualTheme === theme1 ? theme2 : theme1);
  };

  return (
    <PaperProvider theme={actualTheme}>
      <SafeAreaView style={mainStyle.rootContainer}>
        <ThemeContext.Provider value={{ toggleStyle, index, setIndex }}>
          <FoodCalendarCalendarProvider>
            <HealthGoalsProvider>
              <AppbarThemeSwitcher actualTheme={actualTheme} />
              <BottomTabs actualTheme={actualTheme} />
            </HealthGoalsProvider>
          </FoodCalendarCalendarProvider>
        </ThemeContext.Provider>
      </SafeAreaView>
      <StatusBar backgroundColor={actualTheme.colors.background} />
    </PaperProvider>
  );
}
