import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import React from "react";

const ClimbDetail = ({ climb, img }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={img}></Image>
      </View>
      <Text style={styles.textStyle}>{climb?.route_name}</Text>
      <View style={styles.detailContent}>
        <Text style={styles.subHeading}>Description: {climb?.description}</Text>
        <Text style={styles.subHeading}>
          First Ascent: {climb?.first_ascent}
        </Text>
        <Text style={styles.subHeading}>Location: {climb?.location}</Text>
        <Text style={styles.subHeading}>Protection: {climb?.protection}</Text>
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
    marginVertical: 5,
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

export default ClimbDetail;
