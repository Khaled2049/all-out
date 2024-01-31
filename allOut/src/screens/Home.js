import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>All Out</Text>
      <Button
        onPress={() => props.navigation.navigate("Hikes")}
        title="Hikes"
      ></Button>
      <Button
        onPress={() => props.navigation.navigate("Climbs")}
        title="Climbs"
      ></Button>
      <Button
        onPress={() => props.navigation.navigate("Map")}
        title="Map"
      ></Button>
    </View>
  );
}

export default HomeScreen;
