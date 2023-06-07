import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const textColor = '#FFF'

const styles = StyleSheet.create({
	
  container: {
	alignItems: 'center',
	backgroundColor: textColor,
    flex: 1,
    justifyContent: 'center',
  },
});


