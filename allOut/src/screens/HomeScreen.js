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
import { HikeContext } from "../Context/HikeContext";

import Search from "../components/Search";
import List from "../components/List";

function HomeScreen(props) {
  const hikes = useContext(HikeContext);
  const { data } = useQuery(GET_CLIMBS);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <View>
      <ImageBackground
        source={require("../../assets/dark_background.png")}
        style={{
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
        }}
      >
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
      </ImageBackground>
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
