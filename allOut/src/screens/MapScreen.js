import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import MapboxGL, { MarkerView } from "@rnmapbox/maps";
import { useRoute } from "@react-navigation/native";

MapboxGL.setAccessToken(
  "pk.eyJ1Ijoia2hhbGVkMjA0OCIsImEiOiJjbHJqbnI2azQwNWRyMmtraXlzdWR3N2xoIn0.25oYJMrELC1s9VPPA60ndA"
);

const MapScreen = () => {
  const mapRef = useRef(null);
  const cameraRef = useRef(null);
  const route = useRoute();
  const { selectedTrail } = route.params || {};
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (mapRef.current && cameraRef.current) {
      console.log("Setting camera");
      cameraRef.current.setCamera({
        centerCoordinate: selectedTrail
          ? selectedTrail.geometry.coordinates
          : [39.5501, 105.7821],
        zoomLevel: 7,
        animationMode: "flyTo",
        animationDuration: 3000, // Adjust the duration as needed
      });
    }

    setIsLoading(false);
  }, [selectedTrail, mapRef, cameraRef]);

  if (isLoading) {
    // Show a loading screen
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading...</Text>
      </View>
    );
  }

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
    flex: 1,
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
