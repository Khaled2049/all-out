import React, { useRef, useState } from "react";
import { Dimensions, Text, View, FlatList } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Card from "./Card";
import Climbs from "../../data/mac.json";

const Recommendation = () => {
  const width = Dimensions.get("window").width - 20;
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderClimb = ({ item }) => {
    return <Card item={item} onPress={() => navigateToDetailScreen(item)} />;
  };

  return (
    <View style={{ paddingBottom: 200 }}>
      <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}>
        You may also like these ...
      </Text>
      <Carousel
        loop
        ref={carouselRef}
        width={width}
        height={width / 2}
        autoPlay={false}
        data={Climbs.slice(0, 5)}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
            }}
          >
            <Card item={item} />
          </View>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
          marginBottom: 100,
        }}
      ></View>
    </View>
  );
};

export default Recommendation;
