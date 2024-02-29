import { View, Text, FlatList } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";

function HomeScreen(props) {
  return (
    <View>
      <SearchBar />
      <View>
        <Text>Weather</Text>
        <View>
          <Weather lon={-106.10864} lat={37.75306} />
        </View>
      </View>
      <Text>Featured Climbs</Text>
    </View>
  );
}

export default HomeScreen;
