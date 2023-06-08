import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import BottomTabs from "./src/navigation/BottomTabs";
import { mainStyle, theme } from "./src/styles/appStyle";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.background} />
      <SafeAreaView style={mainStyle.rootContainer}>
        <BottomTabs />
      </SafeAreaView>
    </PaperProvider>
  );
}
