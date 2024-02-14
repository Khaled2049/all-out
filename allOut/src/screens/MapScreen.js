import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  PermissionsAndroid,
} from "react-native";
import MapboxGL, { MarkerView } from "@rnmapbox/maps";
import { useRoute } from "@react-navigation/native";
import Geolocation from "react-native-geolocation-service";
import * as Device from "expo-device";

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

const MapScreen = () => {
  const mapRef = useRef(null);
  const cameraRef = useRef(null);
  const route = useRoute();
  const { selectedTrail } = route.params || {};
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLocation = async () => {
      setLoading(true);
      const result = await requestLocationPermission();
      if (result) {
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
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (location && mapRef.current) {
      // if running on emulator, set the camera to Denver, CO
      if (!Device.isDevice) {
        cameraRef.current.setCamera({
          centerCoordinate: [-106.10864, 37.75306],
          zoomLevel: 5,
          pitch: 4,
        });
      } else {
        cameraRef.current.setCamera({
          centerCoordinate: [
            location.coords.longitude,
            location.coords.latitude,
          ],
          zoomLevel: 5,
        });
      }
    }
  }, [location]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView ref={mapRef} style={styles.map}>
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
        {/* <View
          style={{ marginTop: 10, padding: 10, borderRadius: 10, width: "40%" }}
        >
          <Button title="Get Location" onPress={getLocation} />
        </View> */}
        {loading && (
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
          </View>
        )}
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
  map: {
    flex: 0.75,
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
