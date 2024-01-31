import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const HikeScreen = () => {
  const friends = [
    { name: "Hike" },
    { name: "Hike1" },
    { name: "Hike2" },
    { name: "Hike3" },
    { name: "Hike4" },
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
{
  /* <Button
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
></Button> */
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10, // Adjust margin as needed
  },
});

export default HikeScreen;
