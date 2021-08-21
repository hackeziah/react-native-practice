import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AppButton from "./app/components/AppButton";
import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
export default function App() {
  return (
    <ListingsScreen  />
    // <AccountScreen />

    // <Screen>
    //   <ListItem
    //     title="My title"
    //     subTitle="My sub Title"
    //     imageComponent={<Icon name="email" size={50} backgroundColor="red" />}
    //   />
    // </Screen>
    // <Icon name="email" size={50} backgroundColor="red" iconColor="white" />

    // <MessagesScreen />
    // <ListingDetailsScreen />
    // <ViewImageScreen />
    // <View style={{ backgroundColor: "#f8f4f4", paddingTop: 100, padding: 20 }}>
    // <Card
    //   title="Jacket for sale"
    //   subTitle="100"
    //   image={require("./app/assets/jacket.jpg")}
    // />
    // </View>
  );
}
