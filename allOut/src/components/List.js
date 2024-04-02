// List.js
import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
  const navigateToDetailScreen = (hike) => {
    // Navigate to the detail screen with the selected climb data
    navigation.navigate("Trail Reports", { hike });
  };

  const navigation = useNavigation();

  const Item = ({ item }) => {
    return (
      <Card
        title={item.properties.name}
        onPress={() => navigateToDetailScreen(item)}
      />
    );
  };

  const renderItem = ({ item }) => {
    if (searchPhrase === "") {
      return null;
    }

    if (
      item.properties.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item item={item} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
