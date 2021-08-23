import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Switch,
} from "react-native";
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
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
export default function App() {
  const [firstName, setFirstName] = useState("");
  const [data, setData] = useState(false);
  const categories = [
    { label: "Pizza", value: 1 },
    { label: "Burger", value: 2 },
    { label: "Drinks", value: 3 },
  ];

  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Catgory"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
    // <Switch value={data} onValueChange={(change) => setData(change)} />
    //
    // <AppTextInput placeholder="Name" icon="email" />
    // <Screen>
    //   <Text>{firstName}</Text>
    //   <TextInput
    //     secureTextEntry={true}
    //     keyboardType="numeric"
    //     clearButtonMode="always"
    //     onChangeText={(text) => setFirstName(text)}
    //     placeholder="First Name"
    //     style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
    //   />
    // </Screen>
    // <ListingsScreen  />
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
