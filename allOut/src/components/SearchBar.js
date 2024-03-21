import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const result = data.find((item) => item === searchTerm); // Assuming data is an array of strings or primitive values
    if (result) {
      console.log("Selected Item:", result);
    } else {
      console.log("Item not found");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Find an adventure..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
});

export default SearchBar;
