import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Bag from "../components/Bag";
import ClimbDetail from "../components/ClimbDetail";
import HikeDetail from "../components/HikeDetail";
import Colors from "../components/Colors";

import UserReviews from "../components/UserReviews";
import { images } from "./images";

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
        <View style={{ flex: 1, position: "relative" }}>
          <View style={styles.topBox}>
            <ScrollView>
              <ClimbDetail climb={climb} img={img} />
              <View style={styles.container}>
                <Bag items={bagItems} />
              </View>
            </ScrollView>
            <View style={styles.reviewContainer}>
              <UserReviews />
            </View>
          </View>
        </View>
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
          <View style={styles.topBox}>
            <ScrollView>
              <HikeDetail hike={hike} img={img} />
              <View style={styles.container}>
                <Bag items={bagItems} />
              </View>
            </ScrollView>
            <View style={styles.reviewContainer}>
              <UserReviews />
            </View>
          </View>
        </View>
      );
    }
  }

  return (
    <View style={styles.page}>
      <Text>Select a climb or Hike to get details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: "relative",
    marginBottom: 20,
  },
  topBox: {
    // flex: 0.9,
    backgroundColor: Colors.brown,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  reviewContainer: {
    flex: 1,
    position: "absolute",
    top: 400,
    height: 300,
    width: "100%",
  },
});

export default DetailScreen;
