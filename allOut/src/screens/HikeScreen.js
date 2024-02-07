import React from "react";
import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { HikeContext } from "../Context/HikeContext";
import TrailheadList from "../components/TrailheadList";

const HikeScreen = () => {
  const hikes = useContext(HikeContext);

  const onTrailPress = (selectedTrail) => {
    // Handle the selected trail, if needed
    console.log("Selected Trail:", selectedTrail);
  };

  return (
    <View style={styles.page}>
      <TrailheadList trailheads={hikes} onTrailPress={onTrailPress} />
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

export default HikeScreen;
