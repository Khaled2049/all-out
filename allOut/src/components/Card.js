import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  randomFloatBetween0And5,
  generateDifficulty,
} from "../utils/helperMethods";
const Card = ({ imageSource, item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* <Image source={{ uri: imageSource }} style={styles.image} /> */}
      <View style={styles.textContainer}>
        {item?.properties?.name && (
          <View>
            <Text style={styles.title}>{item.properties.name}</Text>
            <Text>
              <AntDesign name="star" size={24} color="black" />{" "}
              {generateDifficulty()} | {Math.floor(Math.random() * 46) + 5}{" "}
              Miles
            </Text>
          </View>
        )}
        {item?.route_name && (
          <View>
            <Text style={styles.title}>{item?.route_name}</Text>
            <Text>
              Grade: {item.yds} |{" "}
              <AntDesign name="star" size={24} color="black" />{" "}
              {randomFloatBetween0And5()}
            </Text>
          </View>
        )}
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
    width: 350,
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
