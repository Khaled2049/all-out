import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Table = ({ profiles }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Leaderboards</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.columnHeader}>Name</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.columnHeader}>Sport</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.columnHeader}>Badges</Text>
        </View>
      </View>
      {/* Example rows */}
      {profiles.map((profile, index) => (
        <View style={styles.row} key={index}>
          <View style={styles.column}>
            <Text style={styles.cell}>{profile.name}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.cell}>{profile.sport}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.cell}>0</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    width: "100%",
  },
  column: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
  columnHeader: {
    fontWeight: "bold",
  },
  cell: {
    textAlign: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});
export default Table;
