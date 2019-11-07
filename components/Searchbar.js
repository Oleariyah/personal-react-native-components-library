import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

export default () => {
  const [firstQuery, setFirstQuery] = useState("");

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={query => {
        setFirstQuery(query);
      }}
      value={firstQuery}
    />
  );
};
