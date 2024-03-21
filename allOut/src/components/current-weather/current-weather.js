import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const getWeatherIconName = (iconCode) => {
  switch (iconCode) {
    case "01d":
    case "01n":
      return "sun-o";
    case "02d":
    case "02n":
      return "cloud";
    case "03d":
    case "03n":
      return "cloud";
    case "04d":
    case "04n":
      return "cloud";
    case "09d":
    case "09n":
      return "tint";
    case "10d":
    case "10n":
      return "rain";
    case "11d":
    case "11n":
      return "bolt";
    case "13d":
    case "13n":
      return "snowflake-o";
    case "50d":
    case "50n":
      return "smog";
    default:
      return "question";
  }
};

const CurrentWeather = ({ data }) => {
  const weatherIconName = getWeatherIconName(data.weather[0].icon);
  return (
    <View style={styles.container}>
      <FontAwesome name={weatherIconName} size={70} color="#333" />

      <Text style={styles.description}>{data.weather[0].description}</Text>

      <View style={styles.details}>
        <Text style={styles.temperature}>{Math.round(data.main.temp)}°C</Text>
        <Text style={styles.detailsText}>
          Feels like: {Math.round(data.main.feels_like)}°C
        </Text>
        <Text style={styles.detailsText}>Wind: {data.wind.speed} m/s</Text>
        <Text style={styles.detailsText}>Humidity: {data.main.humidity}%</Text>
        <Text style={styles.detailsText}>
          Pressure: {data.main.pressure} hPa
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  description: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
  },
  details: {
    alignItems: "center",
  },
  temperature: {
    fontSize: 32,
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 20, // Adjust line height for better spacing
  },
});

export default CurrentWeather;
