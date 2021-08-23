import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItems from "./PickerItems";
function AppPicker({ icon, placeholder, items, selectedItem, onSelectItem }) {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={visible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setVisible(false)}></Button>
          <FlatList
            style={styles.picker}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItems
                label={item.label}
                onPress={() => {
                  setVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  picker: {
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
  },

  text: {
    flex: 1,
  },
});
