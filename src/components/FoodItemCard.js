import React from "react";
import { TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FoodItemCard = ({ food, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>{food.label}</Text>
        </Card.Content>
        <Card.Cover style={styles.cover} source={{ uri: food.image }} />
      </Card>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  card: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.3,
    borderRadius: 8,
    elevation: 2,
    padding: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cover: {
    height: windowHeight * 0.2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default FoodItemCard;
