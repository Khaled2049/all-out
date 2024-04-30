import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import Colors from "../components/Colors";
import { useNavigation } from "@react-navigation/native";
import MyContext from "../Context/MyContext";

const CreateGroupScreen = () => {
  const navigation = useNavigation();
  const { AddGroup, groups } = useContext(MyContext);
  const createId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  console.log(groups);

  const [userInfo, setUserInfo] = useState({});

  const [formState, setFormState] = useState({
    groupId: createId(),
    groupName: "",
    members: [],
  });

  const createGroup = () => {
    formState.members.push({
      email: userInfo.email,
      userName: userInfo.userName,
    });
    console.log("Creating Group: ", formState);
    AddGroup(formState);
    navigation.navigate("Join Group");
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10, fontSize: 24 }}>
        Create a climbing Group
      </Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        value={formState.groupName}
        onChangeText={(e) =>
          setFormState({
            ...formState,
            groupName: e,
          })
        }
        placeholder="Enter Group Name"
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        value={userInfo.userName}
        onChangeText={(e) =>
          setUserInfo({
            ...userInfo,
            userName: e,
          })
        }
        placeholder="User Name"
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        value={userInfo.email}
        onChangeText={(e) =>
          setUserInfo({
            ...userInfo,
            email: e,
          })
        }
        placeholder="Your email address"
      />

      <TouchableOpacity style={styles.btn} onPress={() => createGroup()}>
        <Text>Create Group</Text>
      </TouchableOpacity>
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

export default CreateGroupScreen;
