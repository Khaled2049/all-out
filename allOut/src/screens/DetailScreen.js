import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Bag from "../components/Bag";
import ClimbDetail from "../components/ClimbDetail";
import HikeDetail from "../components/HikeDetail";
import Colors from "../components/Colors";

import UserReviews from "../components/UserReviews";
import { images } from "./images";
import Recommendation from "../components/Recommendation";

const bagItems = ["shoes", "chalk", "harness", "rope", "quickdraws"];

const DetailScreen = ({ route }) => {
  if (route.params?.climb) {
    const { climb } = route.params;
    const img_obj = images.filter((o) => {
      return o["id"] == climb.route_name;
    })[0];
    let img = null;
    if (img_obj) {
      img = img_obj["image"];
      return (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ClimbDetail climb={climb} img={img} />
          <View style={styles.topBox}>
            <View style={styles.container}>
              <Bag items={bagItems} />
              <Recommendation />
            </View>
            <View style={styles.reviewContainer}>
              <UserReviews />
            </View>
          </View>
        </ScrollView>
      );
    }
  }
  if (route.params?.hike) {
    const { hike } = route.params;
    const img_obj = images.filter((o) => {
      return o["id"] == hike.id;
    })[0];
    let img = null;
    if (img_obj) {
      img = img_obj["image"];
      return (
        <View style={{ flex: 1, position: "relative" }}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <HikeDetail hike={hike} img={img} />
            <View style={styles.topBox}>
              <View style={styles.container}>
                <Bag items={bagItems} />
                <Recommendation />
              </View>
            </View>
          </ScrollView>
          <View style={styles.reviewContainer}>
            <UserReviews />
          </View>
        </View>
      );
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.page}>
        <Text>Select a climb or Hike to get details</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // flexGrow: 1,
    // marginBottom: 200,
  },
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    // position: "relative",
    marginBottom: 20,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  },
  topBox: {
    backgroundColor: Colors.brown,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  },
  reviewContainer: {
    flex: 1,
    position: "absolute",
    top: 400,
    height: 300,
    width: "100%",

    paddingBottom: 90,
  },
});

export default DetailScreen;
