// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Screens
import HomeScreen from "./src/screens/Home";
import HiikeScreen from "./src/screens/HikeScreen";
import MapScreen from "./src/screens/MapScreen";
import ClimbsScreen from "./src/screens/ClimbScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Hikes" component={HiikeScreen} />
        <Stack.Screen name="Climbs" component={ClimbsScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator> */}
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
              <MaterialCommunityIcons name="hiking" color={color} size={size} />
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
  );
}

export default App;
