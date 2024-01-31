import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ClimbsScreen = () => {
  const friends = [
    { name: "Climb" },
    { name: "Climb1" },
    { name: "Climb2" },
    { name: "Climb3" },
    { name: "Climb4" },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
      keyExtractor={(friend) => friend.name}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10, // Adjust margin as needed
  },
});

export default ClimbsScreen;
