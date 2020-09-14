import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './src/components/Login/Login.js';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <Login />
  )
};

export default App;
