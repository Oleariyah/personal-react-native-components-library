import React, { useState } from "react";
import { Checkbox } from "react-native-paper";

export default () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      color="red"
      status={checked ? "checked" : "unchecked"}
      onPress={() => {
        setChecked({ checked: !checked });
      }}
    />
  );
};
