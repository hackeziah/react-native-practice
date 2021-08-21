import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
const listings = [
  {
    id: 1,
    title: "Pizza 1",
    price: 100,
    image: require("../assets/pizza.jpeg"),
  },

  {
    id: 2,
    title: "Pizza 2",
    price: 150,
    image: require("../assets/pizza2.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"P" + item.price}
            image={item.image}
            onPress={() => console.log("clicked")}
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
