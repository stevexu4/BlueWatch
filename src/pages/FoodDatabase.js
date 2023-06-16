import * as React from "react";
import { Button } from "react-native-paper";
import Constants from 'expo-constants';

const FoodDatabase = () => {
  return <Button onPress={() => console.log( Constants.expoConfig.extra.apiAppKey )}> Touch me Food DB </Button>;
};

export default FoodDatabase;
