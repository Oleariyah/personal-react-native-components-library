import React, { useState } from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";

export default () => {
  const [checked, setChecked] = useState("first");
  return (
    <View>
      <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => {
          setChecked("first");
        }}
      />
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={() => {
          setChecked("second");
        }}
      />
    </View>
  );
};
