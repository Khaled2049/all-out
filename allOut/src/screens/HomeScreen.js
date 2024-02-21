import { View, Text, FlatList } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";

import Weather from "../components/Weather";

function HomeScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <View>
        <Text>Weather</Text>
        <View>
          <Weather lon={-106.10864} lat={37.75306} />
        </View>
        <Text>Featured Hikes</Text>
        <Text>Featured Climbs</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
