import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { HikeContext } from "../Context/HikeContext";
import Map from "../components/Map";

const MapScreen = () => {
  const hikes = useContext(HikeContext);

  return <Map data={hikes} />;
};

export default MapScreen;

const styles = StyleSheet.create({});
