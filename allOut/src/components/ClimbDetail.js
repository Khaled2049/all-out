import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import React from "react";
import Colors from "./Colors";

const ClimbDetail = ({ climb, img }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>{climb.route_name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={img} />
      </View>
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
  container: {
    backgroundColor: Colors.darkBlue,
    padding: 16,
  },
  header: {
    backgroundColor: Colors.olive,
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  content: {
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    color: Colors.white,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  detailContent: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.olive,
    borderRadius: 4,
  },
  imageContainer: {
    width: "100%",
    height: 400,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default ClimbDetail;
