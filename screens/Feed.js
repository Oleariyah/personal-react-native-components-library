import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import Accordion from "../components/Accordion";

export default () => {
  return (
    <View style={styles.container}>
      <Card />
      <Accordion />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  }
});
