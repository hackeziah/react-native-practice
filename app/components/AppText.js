import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={([styles.text], style)}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "grey",
    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: "Verdana",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
    // fontSize: 90,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Verdana",
  },
});
export default AppText;
