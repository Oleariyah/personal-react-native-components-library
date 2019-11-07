import React from "react";
import { Appbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default () => {
  return (
    <View>
      <Appbar style={styles.top}>
        <Appbar.Action
          icon="archive"
          onPress={() => console.log("Pressed archive")}
        />
        <Appbar.Action
          icon="label"
          onPress={() => console.log("Pressed mail")}
        />
        <Appbar.Action
          icon="label"
          onPress={() => console.log("Pressed label")}
        />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log("Pressed delete")}
        />
      </Appbar>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    paddingTop: 40,
    padding: 15,
    left: 0,
    right: 0,
    top: 0
  }
});
