import React, { useState } from "react";
import { ToggleButton } from "react-native-paper";

export default () => {
  const [value, setValue] = useState("left");
  return (
    <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
      <ToggleButton icon="format-align-left" value="left" />
      <ToggleButton icon="format-align-right" value="right" />
    </ToggleButton.Row>
  );
};
