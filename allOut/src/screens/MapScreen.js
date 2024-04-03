import React, { useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { HikeContext } from "../Context/HikeContext";
import Climbs from "../../data/mac.json";

import HikeMap from "../components/HikeMap";
import ClimbMap from "../components/ClimbMap";
const MapScreen = () => {
  const hikes = useContext(HikeContext);
  const [isHikeMapVisible, setIsHikeMapVisible] = useState(true);

  const toggleMap = () => {
    setIsHikeMapVisible(!isHikeMapVisible);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {isHikeMapVisible ? (
          <HikeMap data={hikes} />
        ) : (
          <ClimbMap data={Climbs} />
        )}
      </View>
      <TouchableOpacity onPress={toggleMap} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {isHikeMapVisible ? "Show Climb Map" : "Show Hike Map"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  toggleButton: {
    position: "absolute",
    top: 20,
    right: 20,
    alignSelf: "center", // Center horizontally
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
  toggleButtonText: {
    color: "white",
  },
});
