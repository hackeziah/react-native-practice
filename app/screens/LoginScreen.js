import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
function LoginScreen(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppTextInput
        icon="email"
        autoCorrect={false}
        autoCapitalize="none"
        placeholer="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(text) => setUsername(text)}
      />

      <AppTextInput
        icon="lock"
        autoCorrect={false}
        autoCapitalize="none"
        placeholer="Password"
        textContentType="password"
        secureTextEntry
        onChangeText={(text) => ser(text)}
      />
      <AppButton title="Login" onPress={() => console.log("Test")} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
