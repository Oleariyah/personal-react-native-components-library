import React, { useState } from "react";
import { FAB, Portal, Provider } from "react-native-paper";
import { StyleSheet } from "react-native";

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Provider>
      <Portal>
        <FAB.Group
          style={styles.fab}
          fabStyle={{ backgroundColor: "gold" }}
          open={open}
          icon={open ? "clock" : "plus"}
          actions={[
            {
              icon: "plus",
              onPress: () => console.log("Pressed add")
            },
            {
              icon: "star",
              label: "Star",
              onPress: () => console.log("Pressed star")
            },
            {
              icon: "email",
              label: "Email",
              onPress: () => console.log("Pressed email")
            },
            {
              icon: "bell",
              label: "Remind",
              onPress: () => console.log("Pressed notifications")
            }
          ]}
          onStateChange={({ open }) => setOpen(open)}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});
