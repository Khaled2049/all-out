import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import hikes from '../../data/hikes.json';
import TrailheadList from "../components/TrailheadList";




const HikeScreen = () => {
  return (
    <View style={styles.page}>
      <TrailheadList trailheads={hikes} />
    </View>
  );


  // const renderItem = ({ item }) => (
  //     <TouchableOpacity onPress={() => onTrailPress(item)}>
  //     <View style={styles.row}>
  //       <Text style={styles.trailheadName}>{item.properties.name}</Text>
  //     </View>
  //   </TouchableOpacity>
  // );

  // return (
  //   <FlatList
  //     data={hikes}
  //     keyExtractor={(item) => item.id}
  //     renderItem={renderItem}
  //     style={styles.container}
  //   />
  // );
};
{
  /* <Button
onPress={() => props.navigation.navigate("Hikes")}
title="Hikes"
></Button>
<Button
onPress={() => props.navigation.navigate("Climbs")}
title="Climbs"
></Button>
<Button
onPress={() => props.navigation.navigate("Map")}
title="Map"
></Button> */
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10, // Adjust margin as needed
  },
  container: {
    padding: 16,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
  },
  trailheadName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HikeScreen;
