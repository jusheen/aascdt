import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const CafeteriasScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cafeterias Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffdd59'
  },
});

export default function Cafeterias() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cafeterias" component={CafeteriasScreen} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={
          {
            headerTitle: 'Profile',
            headerLeft: null,
            gesturesEnabled: false,
            headerStyle: {
              backgroundColor: '#FFF',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }
        }
      />
    </Tab.Navigator>
  );
}
