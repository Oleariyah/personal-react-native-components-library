import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider
} from "react-native-paper";
import AppBar from "./components/AppBar";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import BottomNavigation from "./components/BottomNavigation";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "green",
    accent: "orange"
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <AppBar />
        <Banner />
        <BottomNavigation />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
