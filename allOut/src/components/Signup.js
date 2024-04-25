import Login from "./Login";
import Colors from "../components/Colors";
import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  box: { width: "100%", alignItems: "center" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.teal,
  },
});
export default Signup;
