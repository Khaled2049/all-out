import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useMemo, useRef, useContext } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView, FlatList } from "react-native-gesture-handler";

const TrailheadList = ({ trailheads }) => {
  const navigation = useNavigation();

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const onTrailPress = (item) => {
    // Navigate to MapScreen with the selected trail as a parameter
    navigation.navigate("Home", { selectedTrail: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onTrailPress(item)}>
      <View style={styles.row}>
        <Text style={styles.trailheadName}>{item.properties.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <FlatList
              data={trailheads}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              style={styles.listContainer}
            />
          </View>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 12,
  },
  trailheadName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: "100%",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    padding: 16,
    height: 40,
    flexGrow: 1,
  },
});

export default TrailheadList;
