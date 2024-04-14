import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import React from "react";

const HikeDetail = ({ hike, img }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={img}></Image>
      </View>
      <Text>Name: {hike.properties?.name}</Text>
      <Text>Manager: {hike.properties?.manager}</Text>
      <Text>Fee: {hike.properties?.fee}</Text>
      <Text>Type: {hike.properties?.type}</Text>
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
  imageContainer: {
    height: 400,
    textAlign: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

export default HikeDetail;
