import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useCallback,
} from "react";
import { View, Text, StyleSheet } from "react-native";
import MapboxGL, { MarkerView } from "@rnmapbox/maps";
import { useRoute } from "@react-navigation/native";
import Geolocation from "react-native-geolocation-service";
import * as Device from "expo-device";
import { HikeContext } from "../Context/HikeContext";
import TrailheadList from "../components/TrailheadList";

MapboxGL.setAccessToken(
  "pk.eyJ1Ijoia2hhbGVkMjA0OCIsImEiOiJjbHJqbnI2azQwNWRyMmtraXlzdWR3N2xoIn0.25oYJMrELC1s9VPPA60ndA"
);

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: "Geolocation Permission",
        message: "Can we access your location?",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === "granted") {
      return true;
    } else {
      console.log("You cannot use Geolocation");
      return false;
    }
  } catch (err) {
    return false;
  }
};

const onTrailPress = (selectedTrail) => {
  // Handle the selected trail, if needed
  console.log("Selected Trail:", selectedTrail);
};

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

  return (
    <View style={styles.page}>
      {loading && (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      )}
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera ref={cameraRef} />
          {selectedTrail && (
            <MarkerView
              id="marker"
              coordinate={selectedTrail.geometry.coordinates}
            >
              <View style={styles.marker} />
            </MarkerView>
          )}
        </MapboxGL.MapView>

        <TrailheadList trailheads={hikes} onTrailPress={onTrailPress} />
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  listContainer: {
    padding: 16,
  },
  map: {
    flex: 0.75,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  marker: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
