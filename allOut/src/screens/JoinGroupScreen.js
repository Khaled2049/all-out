import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import React, { useContext, useState, useEffect } from "react";

import MyContext from "../Context/MyContext";

const JoinGroupScreen = () => {
  const { groups, AddMember, user } = useContext(MyContext);
  const [updatedGroups, setUpdatedGroups] = useState(groups);

  useEffect(() => {
    setUpdatedGroups(groups);
    console.log("groups", groups);
  }, [groups]);

  const joinGroup = ({ groupName }) => {
    if (!user) {
      console.log("Please Login to join groups");
      return;
    }
    AddMember(groupName, user);
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.groupName}</Text>

        <Text>Members</Text>
        <FlatList
          data={item.members}
          renderItem={({ item }) => <Text>{item.userName}</Text>}
          keyExtractor={(item) => item.email}
        />
        <Button title="Join Group" onPress={() => joinGroup(item)} />
      </View>
    );
  };

  return (
    <View>
      <Text>Existing Groups</Text>
      <FlatList
        data={updatedGroups}
        renderItem={renderItem}
        keyExtractor={(item) => item.groupName}
      />
    </View>
  );
};

export default JoinGroupScreen;
