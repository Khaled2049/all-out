import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import MapScreen from "./src/screens/MapScreen";
import ClimbsScreen from "./src/screens/ClimbScreen";
import SearchScreen from "./src/screens/SearchScreen";

import { HikeContext } from "./src/Context/HikeContext";
import { ClimbContext } from "./src/Context/ClimbsContext";

import hikeData from "./data/hikes.json";
import climbData from "./data/climbs.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [hikes, setHikes] = useState(hikeData);
  const [climbs, setClimbs] = useState(climbData);

  return (
    <HikeContext.Provider value={hikes}>
      <ClimbContext.Provider value={climbs}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            {/* <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                tabBarLabel: "Search",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="map-search"
                    color={color}
                    size={size}
                  />
                ),
              }}
            /> */}
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{
                tabBarLabel: "Map",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="map"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Trail Reports"
              component={DetailScreen}
              options={{
                tabBarLabel: "Trail Reports",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="navigation"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ClimbsScreen}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="face-man-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ClimbContext.Provider>
    </HikeContext.Provider>
  );
};

export default App;
