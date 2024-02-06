import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const TrailheadList = ({ trailheads, onTrailPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onTrailPress(item)}>
      <View style={styles.row}>
        <Text style={styles.trailheadName}>{item.properties.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={trailheads}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
  },
  trailheadName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TrailheadList;