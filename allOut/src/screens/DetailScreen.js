import React from "react";
import { View, StyleSheet, Text, Image, Dimensions} from "react-native";

const images = [{"id":"C - 008","image":require('./img/climbs/C - 008.jpg')},{"id":"Conn Route","image":require('./img/climbs/Conn Route.jpg')},{"id":"Monkey Swing","image":require('./img/climbs/Monkey Swing.jpg')},{"id":"Oopma loopma Traverse","image":require('./img/climbs/Oopma loopma Traverse.jpg')},{"id":"Puppy Love","image":require('./img/climbs/Puppy Love.jpg')},{"id":"Violins","image":require('./img/climbs/Violins.jpg')},{"id":"trailheads_cotrex02192019.1","image":require('./img/trailheads/trailheads_cotrex02192019.1.jpg')},{"id":"trailheads_cotrex02192019.10","image":require('./img/trailheads/trailheads_cotrex02192019.10.jpg')},{"id":"trailheads_cotrex02192019.2","image":require('./img/trailheads/trailheads_cotrex02192019.2.jpg')},{"id":"trailheads_cotrex02192019.3","image":require('./img/trailheads/trailheads_cotrex02192019.3.jpg')},{"id":"trailheads_cotrex02192019.4","image":require('./img/trailheads/trailheads_cotrex02192019.4.jpg')},{"id":"trailheads_cotrex02192019.5","image":require('./img/trailheads/trailheads_cotrex02192019.5.jpg')},{"id":"trailheads_cotrex02192019.6","image":require('./img/trailheads/trailheads_cotrex02192019.6.jpg')},{"id":"trailheads_cotrex02192019.7","image":require('./img/trailheads/trailheads_cotrex02192019.7.jpg')},{"id":"trailheads_cotrex02192019.8","image":require('./img/trailheads/trailheads_cotrex02192019.8.jpg')},{"id":"trailheads_cotrex02192019.9","image":require('./img/trailheads/trailheads_cotrex02192019.9.jpg')}];
const DetailScreen = ({ route }) => {
  if (route.params?.climb) {
    const { climb } = route.params;
    const img_obj = images.filter((o) => {return (o['id'] == climb.route_name);})[0];
    let img = null;
    if (img_obj) 
    {
      img = img_obj['image'];
      return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={img}></Image>
          </View>
          <Text>Name: {climb?.route_name}</Text>
          <Text>Description: {climb?.description}</Text>
          <Text>First Ascent: {climb?.first_ascent}</Text>
          <Text>Location: {climb?.location}</Text>
          <Text>Protection: {climb?.protection}</Text>
          <View>
            <Text>Commonly Packed items</Text>
          </View>
        </View>
      );
    }
    else
    {
      return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Text>Image: Not Available</Text>
          </View>
          <Text>Name: {climb?.route_name}</Text>
          <Text>Description: {climb?.description}</Text>
          <Text>First Ascent: {climb?.first_ascent}</Text>
          <Text>Location: {climb?.location}</Text>
          <Text>Protection: {climb?.protection}</Text>
          <View>
            <Text>Commonly Packed items</Text>
          </View>
        </View>
      );
    }
  }
  if (route.params?.hike) {
    const { hike } = route.params;
    const img_obj = images.filter((o) => {return (o['id'] == hike.id);})[0];
    let img = null;
    if (img_obj) {
      img = img_obj['image'];
      return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={img}></Image>
          </View>
          <Text>Name: {hike.properties?.name}</Text>
          <Text>Manager: {hike.properties?.manager}</Text>
          <Text>Fee: {hike.properties?.fee}</Text>
          <Text>Type: {hike.properties?.type}</Text>
        </View>
      );
    }
    else
    {
      return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Text>Image: Not Available</Text>
          </View>
          <Text>Name: {hike.properties?.name}</Text>
          <Text>Manager: {hike.properties?.manager}</Text>
          <Text>Fee: {hike.properties?.fee}</Text>
          <Text>Type: {hike.properties?.type}</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.page}>
      <Text>Select a climb or Hike to get details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10, // Adjust margin as needed
  },
  container: {
    padding: 16,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
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
  imageContainer: {
    height: 400,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
});

export default DetailScreen;
