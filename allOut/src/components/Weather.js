import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
// Assuming you're using Expo
import axios from "axios";
import CurrentWeather from "./current-weather/current-weather";

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

  return <CurrentWeather data={weatherData} />;
};

export default Weather;
