import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profile () {
  return (
    <View style={styles.container}>
      <Text>Cafe 3 Screen</Text>
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
