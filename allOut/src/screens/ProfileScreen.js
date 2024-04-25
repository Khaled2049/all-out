import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import Table from "../components/Table";
import Colors from "../components/Colors";
import Login from "../components/Login";
import MyContext from "../Context/MyContext";
import Contact from "../components/Contact";

const ProfileScreen = (props) => {
  const { token } = useContext(MyContext);

  if (props.route.params?.climb) {
    console.log("Climb: ", props.route.params.climb);
  }

  return (
    <View style={styles.container}>
      {token ? (
        <View>
          <View>
            <Button
              title="Create Group"
              onPress={() => props.navigation.navigate("Create Group")}
            ></Button>
          </View>
          <View>
            <Button
              title="Join Group"
              onPress={() => props.navigation.navigate("Join Group")}
            ></Button>
          </View>
        </View>
      ) : (
        <View>
          <Text>Please Login</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: { width: "100%", alignItems: "center", justifyContent: "center" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.teal,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 20,
  },

  input: {
    height: 40,
    width: "100%",
    borderColor: Colors.gray,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.lightGray,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of width and height for circular shape
    marginBottom: 20,
  },
  btn: {
    // position: "absolute",
    // top: 20,
    // right: 20,
    alignSelf: "center", // Center horizontally
    backgroundColor: Colors.brown,
    width: 100,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    width: "auto",
  },
});

export default ProfileScreen;
