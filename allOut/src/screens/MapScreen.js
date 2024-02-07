import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Mapbox, { MarkerView } from "@rnmapbox/maps";
import { useRoute } from "@react-navigation/native";

Mapbox.setAccessToken(
  "pk.eyJ1Ijoia2hhbGVkMjA0OCIsImEiOiJjbHJqbnI2azQwNWRyMmtraXlzdWR3N2xoIn0.25oYJMrELC1s9VPPA60ndA"
);

const MapScreen = () => {
  const route = useRoute();
  const { selectedTrail } = route.params || {};

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          {selectedTrail && (
            <MarkerView
              coordinate={selectedTrail.geometry.coordinates}
              title={selectedTrail.properties.name}
            />
          )}
        </Mapbox.MapView>
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
    ...StyleSheet.absoluteFillObject, // This makes the container take up the entire screen
  },
  map: {
    flex: 1,
  },
});
