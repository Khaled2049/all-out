import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchBar = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation();

  const handleSearch = () => {
    const result = data.filter((item) => {
      console.log(item.properties.name);
      return item.properties.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setFilteredData(result);
    if (searchTerm === "") {
      setFilteredData([]);
    } else {
      console.log("Item not found");
    }
  };

  const navigateToDetailScreen = (hike) => {
    // Navigate to the detail screen with the selected climb data
    navigation.navigate("Trail Reports", { hike });
  };

  const renderListItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetailScreen(item)}>
      <View>
        <Text>{item.properties.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Find an adventure..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={filteredData}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
});

export default SearchBar;
