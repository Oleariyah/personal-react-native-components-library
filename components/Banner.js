import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Banner } from "react-native-paper";

export default () => {
  const [visible, setVisibility] = useState(true);
  return (
    <View>
      <Banner
        style={styles.top}
        visible={visible}
        actions={[
          {
            label: "Fix it",
            onPress: () => setVisibility(false)
          },
          {
            label: "Learn more",
            onPress: () => setVisibility(false)
          }
        ]}
        image={({ size }) => (
          <Image
            source={{
              uri: "https://avatars3.githubusercontent.com/u/17571969?s=400&v=4"
            }}
            style={{
              width: size,
              height: size
            }}
          />
        )}
      >
        There was a problem processing a transaction on your credit card.
      </Banner>
    </View>
  );
};
const styles = StyleSheet.create({
  top: {
    left: 0,
    right: 0,
    top: 0
  }
});
