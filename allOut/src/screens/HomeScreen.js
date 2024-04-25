import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useContext, useState } from "react";
import Weather from "../components/Weather";

import { useQuery, gql } from "@apollo/client";

const GET_CLIMBS = gql`
  {
    climbs {
      description
      first_ascent
      id
      latitude
      left_right_seq
      location
      longitude
      mp_route_id
      mp_sector_id
      parent_sector
      protection
      route_name
      yds
    }
  }
`;

import Search from "../components/Search";
import List from "../components/List";
import MyContext from "../Context/MyContext";
import Signup from "../components/Signup";

function HomeScreen(props) {
  const { token, hikes } = useContext(MyContext);
  const { data } = useQuery(GET_CLIMBS);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <ImageBackground
      source={require("../../assets/dark_background.png")}
      style={{
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
      }}
    >
      <SafeAreaView style={styles.container}>
        {!token ? (
          <Signup />
        ) : (
          <View>
            {/* <Weather lon={-106.10864} lat={37.75306} /> */}
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
        )}
      </SafeAreaView>
    </ImageBackground>
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
