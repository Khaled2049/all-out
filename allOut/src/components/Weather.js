import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

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
        // console.log(response);
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
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Error fetching weather data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{weatherData.weather[0].description}</Text>
      <Text>Temperature: {weatherData.main.temp} F</Text>

      {/* Add more weather information as needed */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Weather;
