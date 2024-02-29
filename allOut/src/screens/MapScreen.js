import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MapboxGL, { MarkerView, PointAnnotation } from "@rnmapbox/maps";
import { useRoute } from "@react-navigation/native";
import Geolocation from "react-native-geolocation-service";
import * as Device from "expo-device";
import { HikeContext } from "../Context/HikeContext";
import { requestLocationPermission } from "../utils/helperMethods";
import { useNavigation } from "@react-navigation/native";

MapboxGL.setAccessToken(
  "pk.eyJ1Ijoia2hhbGVkMjA0OCIsImEiOiJjbHJqbnI2azQwNWRyMmtraXlzdWR3N2xoIn0.25oYJMrELC1s9VPPA60ndA"
);

const MapScreen = () => {
  const cameraRef = useCallback((node) => {
    // console.log("Node", node);
    if (node && !Device.isDevice) {
      node.setCamera({
        centerCoordinate: [-106.10864, 37.75306],
        zoomLevel: 5,
      });
    } else {
      node.setCamera({
        centerCoordinate: [location.coords.longitude, location.coords.latitude],
        zoomLevel: 5,
      });
    }
  }, []);
  const route = useRoute();
  const { selectedTrail } = route.params || {};
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const hikes = useContext(HikeContext);
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
    console.log(item);
    return (
      <TouchableOpacity onPress={() => navigateToDetailScreen(item)}>
        <Text style={styles.textStyle}>{item.properties.name}</Text>
      </TouchableOpacity>
    );
  };

  const navigateToDetailScreen = (hike) => {
    // Navigate to the detail screen with the selected climb data
    navigation.navigate("Details", { hike });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <MapboxGL.MapView style={{ ...StyleSheet.absoluteFillObject }}>
          <MapboxGL.Camera ref={cameraRef} />
          {selectedTrail && (
            <MarkerView
              id="marker"
              coordinate={selectedTrail.geometry.coordinates}
            >
              <View style={styles.marker} />
            </MarkerView>
          )}
          {hikes.map((trail) => (
            <PointAnnotation
              key={trail.id}
              id={trail.id}
              title={trail.properties.name}
              coordinate={trail.geometry.coordinates}
            >
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
          data={hikes}
          renderItem={renderHike}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
  },
  topBox: {
    flex: 0.7,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBox: {
    flex: 0.3,
    backgroundColor: "lightgreen",
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
