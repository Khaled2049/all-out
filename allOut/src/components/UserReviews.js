import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

const UserReviews = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your review here..."
          value={reviewText}
          onChangeText={(text) => setReviewText(text)}
          multiline
        />
        <Button title="Submit" onPress={handleAddReview} />
      </View>

      <Text style={styles.heading}>Reviews:</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <Text style={styles.reviewItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  reviewItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default UserReviews;
