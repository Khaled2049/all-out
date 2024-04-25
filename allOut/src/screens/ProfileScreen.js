import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import Table from "../components/Table";
import Colors from "../components/Colors";
import Login from "../components/Login";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sport, setSport] = useState("");
  const [profiles, setProfiles] = useState([]); // Change to an array from [
  const [isMember, setIsMember] = useState(false);

  const toggleMembership = () => {
    setIsMember(!isMember);
  };

  const saveProfile = () => {
    // You can implement logic here to save the profile data
    const person = { name: name, email: email, sport: sport };

    setProfiles([...profiles, person]); // Add the new profile to the array
    // Reset the fields
    setName("");
    setEmail("");
    setSport("");

    setIsMember(true);
  };

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
  title: {
    fontSize: 24,
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
  button: {
    marginBottom: 10,
  },
});

export default ProfileScreen;
