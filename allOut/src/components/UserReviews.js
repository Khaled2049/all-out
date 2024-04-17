import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, {
  useCallback,
  useMemo,
  useRef,
  useContext,
  useState,
} from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView, FlatList } from "react-native-gesture-handler";
import Colors from "./Colors";

const UserReviews = () => {
  const navigation = useNavigation();
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleAddReview = () => {
    if (reviewText.trim() === "") {
      alert("Please enter a review");
      return;
    }

    setReviews([...reviews, reviewText]);
    setReviewText("");
  };
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Write your review here..."
                value={reviewText}
                onChangeText={(text) => setReviewText(text)}
                multiline
              />
              <Button title="Submit" color={Colors.orange} onPress={handleAddReview} />
            </View>
            <View style={{ padding: 10 }}>
              <Text style={styles.heading}>Reviews</Text>
              <FlatList
                data={reviews}
                renderItem={({ item }) => (
                  <Text style={styles.reviewItem}>{item}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 12,
  },
  trailheadName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    padding: 16,
    height: 40,
    flexGrow: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginLeft: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  reviewItem: {
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
  },
});

export default UserReviews;
