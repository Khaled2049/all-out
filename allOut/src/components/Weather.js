import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
// Assuming you're using Expo
import axios from "axios";
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

const Weather = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = "1425e644c18d0ec80f3fa5c6e516cb95";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
        );

        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [lat, lon]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View>
        <Text>Error fetching weather data</Text>
      </View>
    );
  }
  const weatherIconName = getWeatherIconName(weatherData.weather[0].icon);

  return (
    <View style={styles.container}>
      <FontAwesome name={weatherIconName} size={70} color="#333" />

      <Text style={styles.description}>
        {weatherData.weather[0].description}
      </Text>

      <View style={styles.details}>
        <Text style={styles.temperature}>
          {Math.round(weatherData.main.temp)}°F
        </Text>
        <Text style={styles.detailsText}>
          Feels like: {Math.round(weatherData.main.feels_like)}°F
        </Text>
        <Text style={styles.detailsText}>
          Wind: {weatherData.wind.speed} m/s
        </Text>
        <Text style={styles.detailsText}>
          Humidity: {weatherData.main.humidity}%
        </Text>
        <Text style={styles.detailsText}>
          Pressure: {weatherData.main.pressure} hPa
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
    textTransform: "uppercase",
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

export default Weather;
