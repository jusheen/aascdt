import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cafeterias from '../src/screens/CafeteriasScreen.js';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Cafeterias' component={Cafeterias} />
    </Stack.Navigator>
  );
}

export default AppStack;
