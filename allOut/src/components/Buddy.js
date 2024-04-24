import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "./Colors";
import { useNavigation } from "@react-navigation/native";

const Buddy = ({ climb }) => {
  const navigation = useNavigation();

  const findBuddy = () => {
    console.log("Find a buddy to climb with!");
    navigation.navigate("Profile", { climb });
  };

  return (
    <View style={styles.buddy}>
      <Text style={styles.heading}>Find a buddy to climb with!</Text>
      <TouchableOpacity onPress={findBuddy} style={styles.btn}>
        <Text style={styles.btnText}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buddy: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.brown,
  },
  btn: {
    // position: "absolute",
    // top: 20,
    // right: 20,
    alignSelf: "center", // Center horizontally
    backgroundColor: Colors.teal,
    width: 100,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  btnText: {
    color: "white",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 10,
    color: Colors.black,
    textShadowColor: Colors.darkBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
});

export default Buddy;
