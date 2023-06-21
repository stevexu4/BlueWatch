import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

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
  },
  card: {
    width: 250,
    height: 200,
    margin: 8,
    borderRadius: 8,
    elevation: 2,
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cover: {
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default FoodItemCard;
