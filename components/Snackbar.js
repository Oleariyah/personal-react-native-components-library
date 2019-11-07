import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Snackbar } from "react-native-paper";

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          }
        }}
      >
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  }
});
