import React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import Avatar from "../components/Avatar";
import Checkbox from "../components/Checkbox";
import Chip from "../components/Chip";
import Dialog from "../components/Dialog";
import Divider from "../components/Divider";
import Drawer from "../components/Drawer";
import Fab from "../components/Fab";
import HelperText from "../components/HelperText";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import Searchbar from "../components/Searchbar";
import ToggleButton from "../components/ToggleButton";

export default () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Avatar />
        <Text>Hello World!</Text>
        <Checkbox />
        <Chip />
        <Dialog />
        <Divider />
        <Drawer />
        <HelperText />
        <Searchbar />
        <ToggleButton />
      </ScrollView>
      <Modal />
      <Menu />
      <Fab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
