import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useContext, useState } from "react";
import Weather from "../components/Weather";
import { HikeContext } from "../Context/HikeContext";

import Search from "../components/Search";
import List from "../components/List";

function HomeScreen(props) {
  const hikes = useContext(HikeContext);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <View>
      <View>
        <Weather lon={-106.10864} lat={37.75306} />
        <View style={styles.root}>
          <Search
            clicked={clicked}
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            setClicked={setClicked}
          />

          <List
            searchPhrase={searchPhrase}
            setClicked={setClicked}
            data={hikes}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
export default HomeScreen;
