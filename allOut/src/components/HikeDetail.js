import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "./Colors"; // Import your color palette

const HikeDetail = ({ hike, img }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>
          {hike.properties?.name}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={img} />
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.subHeading}>
          Manager: {hike.properties?.manager}
        </Text>
        <Text style={styles.subHeading}>
          Fee: {hike.properties?.fee}
        </Text>
        <Text style={styles.subHeading}>
          Type: {hike.properties?.type}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    padding: 16,
    marginBottom: 20,
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
    textShadowColor: Colors.orange,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
    textShadowColor: Colors.orange,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
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

export default HikeDetail;