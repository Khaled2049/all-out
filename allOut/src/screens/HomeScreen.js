import { View, Text, FlatList } from "react-native";
import React from "react";

function HomeScreen(props) {
  const todoItems = [
    { id: "1", text: "Home page" },
    { id: "2", text: "Login buttons" },
    { id: "3", text: "Featured Hikes" },
    // Add more tasks as needed
  ];

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Todo</Text>
      <FlatList
        data={todoItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default HomeScreen;
