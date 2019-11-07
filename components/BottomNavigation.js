import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { BottomNavigation } from "react-native-paper";
import Welcome from "../screens/Welcome";
import Feed from "../screens/Feed";
import Table from "../screens/Table";

const MusicRoute = () => <Welcome />;
const AlbumsRoute = () => (
  <ScrollView>
    <Feed />
    <Feed />
  </ScrollView>
);
const RecentsRoute = () => <Table />;

export default () => {
  const [state, setstate] = useState({
    index: 0,
    routes: [
      { key: "music", title: "Music", icon: "music" },
      { key: "albums", title: "Albums", icon: "album" },
      { key: "recents", title: "Recents", icon: "history" }
    ]
  });

  const handleIndexChange = index => setstate({ ...state, index });
  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute
  });

  return (
    <BottomNavigation
      navigationState={state}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
    />
  );
};
