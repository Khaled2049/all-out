import React from "react";
import { View, StyleSheet, Text } from "react-native";

const DetailScreen = ({ route }) => {
  if (route.params?.climb) {
    const { climb } = route.params;
    return (
      <View style={styles.container}>
        <Text>Name: {climb?.route_name}</Text>
        <Text>Description: {climb?.description}</Text>
        <Text>First Ascent: {climb?.first_ascent}</Text>
        <Text>Location: {climb?.location}</Text>
        <Text>Protection: {climb?.protection}</Text>
        <View>
          <Text>Commonly Packed items</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <Text>Select a climb or Hike to get details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10, // Adjust margin as needed
  },
  container: {
    padding: 16,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 12,
  },
  trailheadName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetailScreen;