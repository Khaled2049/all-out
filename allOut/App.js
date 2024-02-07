// In App.js in a new project

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Screens
import HomeScreen from "./src/screens/Home";
import HiikeScreen from "./src/screens/HikeScreen";
import MapScreen from "./src/screens/MapScreen";
import ClimbsScreen from "./src/screens/ClimbScreen";

import { HikeContext } from "./src/Context/HikeContext";

import data from "./data/hikes.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [hikes, setHikes] = useState(data);

  return (
    <HikeContext.Provider value={hikes}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Hikes"
            component={HiikeScreen}
            options={{
              tabBarLabel: "Hiikes",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="hiking"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Climbs"
            component={ClimbsScreen}
            options={{
              tabBarLabel: "Climbs",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="arrow-up"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarLabel: "Map",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="map" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </HikeContext.Provider>
  );
};

export default App;
