import { View, Text, StyleSheet } from "react-native";

const Bag = ({ items }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Check out these commonly packed items</Text>
      {items.map((item, index) => (
        <View key={index} style={styles.box}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default Bag;
