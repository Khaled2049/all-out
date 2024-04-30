import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import MyContext from "../Context/MyContext";
import Colors from "../components/Colors";

const JoinGroupScreen = () => {
  const { groups, AddMember, user } = useContext(MyContext);

  const joinGroup = ({ groupName }) => {
    if (!user) {
      console.log("Please Login to join groups");
      return;
    }
    AddMember(groupName, user);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.groupContainer}>
        <Text style={styles.groupName}>{item.groupName}</Text>

        <Text style={styles.membersTitle}>Members</Text>
        <FlatList
          data={item.members}
          renderItem={({ item }) => (
            <Text style={styles.memberName}>{item.userName}</Text>
          )}
          keyExtractor={(item) => item.email}
        />
        <TouchableOpacity
          style={styles.joinButton}
          onPress={() => joinGroup(item)}
        >
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Existing Groups</Text>
      <FlatList
        data={groups}
        renderItem={renderItem}
        keyExtractor={(item) => item.groupName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.orange,
  },
  groupContainer: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  groupName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  membersTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
    marginBottom: 5,
  },
  joinButton: {
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default JoinGroupScreen;
