import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import Colors from "./src/components/Colors";
import Login from "./src/components/Login";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:3000",
  cache: new InMemoryCache(),
});

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import MapScreen from "./src/screens/MapScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
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
  const [isMember, setIsMember] = useState(true);

  return (
    <ApolloProvider client={client}>
      <HikeContext.Provider value={hikes}>
        <ClimbContext.Provider value={climbs}>
          <NavigationContainer>
            <View style={styles.container}>
              <Login />
            </View>
            {/* Remove style to see stuff */}
            <View style={{ transform: [{ scale: 0 }] }}>
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
                  component={ProfileScreen}
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
            </View>
          </NavigationContainer>
        </ClimbContext.Provider>
      </HikeContext.Provider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  box: { width: "100%", alignItems: "center" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.teal,
  },
});

export default App;
