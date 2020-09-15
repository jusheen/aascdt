import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Button, Text, View, StyleSheet } from 'react-native';
import Login from './src/components/Login/Login';
import Cafeterias from './src/screens/CafeteriasScreen.js';

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Cafeterias';
  switch (routeName) {
    case 'Cafeterias':
      return 'Home';
    case 'Profile':
      return 'My profile';
    case 'Cafe3':
      return 'Cafe3';
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Cafeterias'
          component={Cafeterias}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerLeft: null,
            gesturesEnabled: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
