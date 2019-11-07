import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Table from "../components/Datatable";
import ProgressBar from "../components/ProgressBar";
import RadioButton from "../components/RadioButton";
import Snackbar from "../components/Snackbar";
import Surface from "../components/Surface";
import Switch from "../components/Switch";

import TextInput from "../components/TextInput";

export default () => {
  return (
    <View style={styles.container}>
      <Table />
      <ProgressBar />
      <RadioButton />
      <Surface />
      <Switch />
      <TextInput />
      <Snackbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  }
});
