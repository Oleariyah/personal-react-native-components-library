import React, { useState } from "react";
import { TextInput } from "react-native-paper";

export default () => {
  const [text, setText] = useState("");
  return (
    <TextInput
      label="Email"
      mode="outlined"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};
