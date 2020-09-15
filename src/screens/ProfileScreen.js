import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  )
}

export default function ProfileScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name='My Profile'
        component={Profile}
        options={({ route }) => ({
          headerLeft: null,
        })}
      />
    </ProfileStack.Navigator>
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
