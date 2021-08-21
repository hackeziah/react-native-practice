import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>P 100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          title="KEVIN PAUL LAMADRID"
          subTitle="5 TESTING"
          image={require("../assets/jerry.png")}
          // onPress={() => console.log("Message selected", item)}
          // renderRightActions={() => (
          //   <View style={{ backgroundColor: "red", width: 70 }} />
          // )}
        />
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  userContainer: {
    marginVertical: 15,
  },
});
