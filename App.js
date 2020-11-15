import React, { useRef, useState } from "react";
import GameScreen from "./src/screens/GameScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function App() {
  const Tab = createMaterialTopTabNavigator();
  const Stack = createStackNavigator();

  function GameTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Play" component={GameScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8b0000",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
