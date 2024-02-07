import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const TrailheadList = ({ trailheads }) => {
  const navigation = useNavigation();

  const onTrailPress = (item) => {
    // Navigate to MapScreen with the selected trail as a parameter
    navigation.navigate("Map", { selectedTrail: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onTrailPress(item)}>
      <View style={styles.row}>
        <Text style={styles.trailheadName}>{item.properties.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={trailheads}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 12,
  },
  trailheadName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TrailheadList;