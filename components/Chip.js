import React from "react";
import { Chip } from "react-native-paper";

export default () => {
  return (
    <Chip
      mode="outlined"
      selectedColor="black"
      icon="information"
      onPress={() => console.log("Pressed")}
      onClose={() => console.log("Closed")}
    >
      Example Chip
    </Chip>
  );
};
