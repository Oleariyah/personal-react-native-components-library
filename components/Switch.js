import React, { useState } from "react";
import { Switch } from "react-native-paper";

export default () => {
  const [isSwitchOn, setSwitch] = useState(false);
  return (
    <Switch
      value={isSwitchOn}
      onValueChange={() => {
        setSwitch(!isSwitchOn);
      }}
    />
  );
};
