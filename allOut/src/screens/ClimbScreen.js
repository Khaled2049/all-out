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
    <View style={styles.container}>
      <View style={styles.topBox}></View>

      <View style={styles.bottomBox}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={friends}
          renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name}</Text>;
          }}
          keyExtractor={(friend) => friend.name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
  },
  topBox: {
    flex: 0.7,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBox: {
    flex: 0.3,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ClimbsScreen;
