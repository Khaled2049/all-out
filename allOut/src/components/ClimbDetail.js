import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import React from "react";

const ClimbDetail = ({ climb, img }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={img}></Image>
      </View>
      <Text>Name: {climb?.route_name}</Text>
      <Text>Description: {climb?.description}</Text>
      <Text>First Ascent: {climb?.first_ascent}</Text>
      <Text>Location: {climb?.location}</Text>
      <Text>Protection: {climb?.protection}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10, // Adjust margin as needed
  },
  container: {
    padding: 16,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
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

export default ClimbDetail;
