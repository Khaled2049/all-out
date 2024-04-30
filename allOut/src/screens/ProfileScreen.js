import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Colors from "../components/Colors";

import MyContext from "../Context/MyContext";

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
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Create Group")}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Create Group</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Join Group")}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Join Group</Text>
            </TouchableOpacity>
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
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "white",
  },
});

export default ProfileScreen;
