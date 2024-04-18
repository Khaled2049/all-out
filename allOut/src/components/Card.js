import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  randomFloatBetween0And5,
  generateDifficulty,
} from "../utils/helperMethods";
import { images } from "../../data/images";
import Colors from "./Colors"

console.log("Images", images);

const Card = ({ item, onPress }) => {
  const img_obj = images.filter((o) => {
    return o["id"] == item?.route_name || o["id"] == item?.id;
  })[0];

  if (img_obj) {
    img = img_obj["image"];
  } else {
    console.log("No image");
  }

  
  if (item?.properties) // hike
  {
    const diff = generateDifficulty();
    const hikeStarCount = diff === "Easy" ? 1 : diff === "Medium" ? 2 : 3;
    let hikeStars = Array.from({ length: hikeStarCount }, (v, i) => i);

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image style={styles.image} source={img}></Image>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>{item.properties.name}</Text>
            <Text style={styles.cardtext}>
              {"Difficulty: "}
              {hikeStars.map((index) => (
                <AntDesign key={index} name="star" size={15} color={Colors.orange} />
              ))}
              {" (" + diff + ")"}
            </Text>
            <Text style={styles.cardtext}>
              {Math.floor(Math.random() * 46) + 5}{" "}Miles
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  if (item?.route_name) // climb
  {
    const diff = item.yds;
    const climbStarCount = 
    /^5\.9|^5\.10/.test(diff) || /^V[3-5]/.test(diff)
    ? 2
    : /^5\.[0-8]$|^V[0-2]/.test(diff)
    ? 1
    : 3;
    const climbStars = Array.from({ length: climbStarCount }, (v, i) => i);
    const difficulty = climbStarCount === 1 ? "Easy" : climbStarCount === 2 ? "Medium" : "Hard";
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image style={styles.image} source={img}></Image>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>{item?.route_name}</Text>
            <Text style={styles.cardtext}>
              {"Difficulty: "}
              {climbStars.map((index) => (
                <AntDesign key={index} name="star" size={15} color={Colors.orange} />
              ))}
              {" (" + difficulty + ")"}
            </Text>
            <Text style={styles.cardtext}>
              {"Grade: " + diff}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.olive,
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
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    height: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    width: 250,
    color: Colors.white,
  },
  cardtext: {
    color: Colors.lightGray,
  },
});

export default Card;
