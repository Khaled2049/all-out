import React, { useState, useContext } from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import Colors from "./src/components/Colors";
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
import CreateGroupScreen from "./src/screens/CreateGroupScreen";
import JoinGroupScreen from "./src/screens/JoinGroupScreen";

import { MyProvider } from "./src/Context/MyContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const GroupStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Create Group" component={CreateGroupScreen} />
      <Stack.Screen name="Join Group" component={JoinGroupScreen} />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
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
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
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
        name="Groups"
        component={GroupStack}
        options={{
          tabBarLabel: "Groups",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const ref = createNavigationContainerRef();
  const [routeName, setRouteName] = useState();
  return (
    <ApolloProvider client={client}>
      <MyProvider>
        <NavigationContainer
          ref={ref}
          onReady={() => {
            setRouteName(ref.getCurrentRoute().name);
          }}
          onStateChange={async () => {
            const previousRouteName = routeName;
            const currentRouteName = ref.getCurrentRoute().name;
            setRouteName(currentRouteName);
          }}
        >
          <MainTabs />
        </NavigationContainer>
      </MyProvider>
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
