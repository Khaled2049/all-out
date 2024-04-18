import React, { useRef, useState } from "react";
import { Dimensions, Text, View, Button } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const Recommendation = () => {
  const width = Dimensions.get("window").width - 20;
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    console.log("currentIndex", currentIndex - 1);
  };

  const goToPrevSlide = () => {
    console.log("currentIndex", currentIndex - 1);
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
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
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
      >
        <Button onPress={goToPrevSlide} title="< Prev" />
        <Button onPress={goToNextSlide} title="Next >" />
      </View>
    </View>
  );
};

export default Recommendation;
