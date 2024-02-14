import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useMemo, useRef, useContext } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const TrailheadList = ({ trailheads }) => {
  const navigation = useNavigation();

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "100%"], []);

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
    <GestureHandlerRootView style={styles.container}>
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
            style={styles.container}
          />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
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
    flex: 0.25,
    padding: 14,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default TrailheadList;
