import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import React from "react";

const HikeDetail = ({ hike, img }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={img}></Image>
      </View>
      <Text style={styles.textStyle}>{hike.properties?.name}</Text>
      <View style={styles.detailContent}>
        <Text style={styles.subHeading}>
          Manager: {hike.properties?.manager}
        </Text>
        <Text style={styles.subHeading}>Fee: {hike.properties?.fee}</Text>
        <Text style={styles.subHeading}>Type: {hike.properties?.type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detailContent: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
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
