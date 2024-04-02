import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Card = ({ imageSource, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* <Image source={{ uri: imageSource }} style={styles.image} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 5, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.25, // for iOS shadow
    shadowRadius: 3.84, // for iOS shadow
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    height: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Card;
