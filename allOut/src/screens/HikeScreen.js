import React from "react";
import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { HikeContext } from "../Context/HikeContext";
import TrailheadList from "../components/TrailheadList";

const HikeScreen = () => {
  const hikes = useContext(HikeContext);
  return (
    <View style={styles.page}>
      <TrailheadList trailheads={hikes} />
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
