import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";

function PickerItems({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText
        style={{
          fontSize: 20,
          margin: 10,
        }}
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );
}

export default PickerItems;
