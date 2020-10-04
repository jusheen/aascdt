import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Button, Text, View, StyleSheet } from 'react-native';

import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import Cafeterias from './src/screens/CafeteriasScreen.js';

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Cafeterias';
  switch (routeName) {
    case 'Cafeterias':
      return 'Home';
    case 'Profile':
      return 'My profile';
    case 'Cafe 3':
      return 'Cafe 3';
  }
}

function falseOrTrue(route) {
  if (getHeaderTitle(route) === 'Profile') {
    return true;
  } else {
    return false;
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name='Onboarding'
          component={OnboardingScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name='Login Screen'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Cafeterias'
          component={Cafeterias}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerLeft: null,
            headerMode: 'none',
            headerShown: falseOrTrue(route),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
