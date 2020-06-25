import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";

const Stack = createStackNavigator()

export default function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}