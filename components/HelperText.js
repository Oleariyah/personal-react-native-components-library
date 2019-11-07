import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export default () => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={styles.text}
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />
      <HelperText type="error" visible={!text.includes("@")}>
        Email address is invalid!
      </HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 10
  }
});
