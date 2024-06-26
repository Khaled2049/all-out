import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import MapboxGL, { MarkerView, PointAnnotation } from "@rnmapbox/maps";
import { useRoute } from "@react-navigation/native";
import Geolocation from "react-native-geolocation-service";
import * as Device from "expo-device";
import { requestLocationPermission } from "../utils/helperMethods";
import { useNavigation } from "@react-navigation/native";
import Card from "./Card";
import Colors from "./Colors"
import { Ionicons } from "@expo/vector-icons";

MapboxGL.setAccessToken(
  "pk.eyJ1Ijoia2hhbGVkMjA0OCIsImEiOiJjbHJqbnI2azQwNWRyMmtraXlzdWR3N2xoIn0.25oYJMrELC1s9VPPA60ndA"
);

const HikeMap = ({ data }) => {
  const camera = useRef(null);

  const route = useRoute();
  const { selectedTrail } = route.params || {};
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const getLocation = async () => {
      setLoading(true);
      const result = await requestLocationPermission();
      if (result && Device.isDevice) {
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation(position);
            setLoading(false);
          },
          (error) => {
            console.log(error.code, error.message);
            setLocation(null);
            setLoading(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log(
          "Running on emulator or permission denied, not getting location"
        );
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  const renderHike = ({ item }) => {
    return <Card item={item} onPress={() => navigateToDetailScreen(item)} />;
  };
  const navigateToDetailScreen = (hike) => {
    // Navigate to the detail screen with the selected climb data
    navigation.navigate("Trail Reports", { hike });
  };

  const onSelectedHike = (hike) => {
    setLocation(hike.geometry.coordinates);
    camera.current.flyTo(hike.geometry.coordinates, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <MapboxGL.MapView style={{ ...StyleSheet.absoluteFillObject }}>
          <MapboxGL.Camera
            centerCoordinate={location ? location : [-106.10864, 37.75306]}
            ref={camera}
            zoomLevel={location ? 15 : 5}
          />
          {selectedTrail && (
            <MarkerView
              id="marker"
              coordinate={selectedTrail.geometry.coordinates}
            >
              {/* <Ionicons name="trail-sign" size={12} color="black" /> */}
              <View style={styles.marker} />
            </MarkerView>
          )}
          {data.map((d) => (
            <PointAnnotation
              key={d.id}
              id={d.id}
              title={d.properties.name}
              coordinate={d.geometry.coordinates}
              onSelected={() => onSelectedHike(d)}
            >
              {/* <Ionicons name="trail-sign" size={12} color="black" /> */}
              <View style={styles.marker} />
            </PointAnnotation>
          ))}
        </MapboxGL.MapView>
        {loading && (
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
          </View>
        )}
      </View>
      <View style={styles.bottomBox}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderHike}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default HikeMap;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue
  },
  topBox: {
    flex: 0.7,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBox: {
    flex: 0.3,
    // position: "absolute",
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  trailDropdown: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  listContainer: {
    padding: 16,
  },
  map: {
    flex: 0.7,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  marker: {
    width: 5,
    height: 5,
    backgroundColor: "red",
    borderRadius: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
