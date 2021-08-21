import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
} from "react-native";
import AppButton from "../components/AppButton";
export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.textLogo}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => console.log("Hi")}
          color="tomato"
        />
        <AppButton
          title="Register"
          onPress={() => console.log("Hi")}
          color="red"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },

  buttonContainer: {
    padding: 25,
    width: "100%",
  },

  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  textLogo: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
});
