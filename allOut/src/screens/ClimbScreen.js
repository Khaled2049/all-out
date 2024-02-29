import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const ClimbsScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "http://10.0.2.2:8000/number_of_climbs/10"
        );

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderClimb = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToDetailScreen(item)}>
        <Text style={styles.textStyle}>{item.route_name}</Text>
      </TouchableOpacity>
    );
  };

  const navigateToDetailScreen = (climb) => {
    // Navigate to the detail screen with the selected climb data
    navigation.navigate("Details", { climb });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}></View>

      <View style={styles.bottomBox}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            {/* Display your data here */}
            {data ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(climb) => climb.mp_route_id}
                renderItem={renderClimb}
              />
            ) : (
              <Text>No data available</Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

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
});

export default ClimbsScreen;
