import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
import { LinearGradient } from "expo-linear-gradient";
import { HikeContext } from "../Context/HikeContext";

function HomeScreen(props) {
  const hikes = useContext(HikeContext);
  return (
    <LinearGradient colors={["#87CEEB", "#32CD32"]} style={styles.container}>
      <View>
        <SearchBar data={hikes} />
        <View>
          <View>
            <Weather lon={-106.10864} lat={37.75306} />
          </View>
        </View>
        <Text>Featured Climbs</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
