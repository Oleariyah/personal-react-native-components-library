import React, { useState } from "react";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";

export default () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <Text>Example Modal</Text>
        </Modal>
        <Button style={{ marginTop: 30 }} onPress={showModal}>
          Show
        </Button>
      </Portal>
    </Provider>
  );
};
