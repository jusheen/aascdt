import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default function LoginForm ({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
      />
      <TextInput
        placeholder='email'
        placeholderTextColor='rgba(255, 255, 255, 0.7)'
        returnKeyType='next'
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
      />
      <TextInput
        placeholder='password'
        placeholderTextColor='rgba(255, 255, 255, 0.7)'
        returnKeyType='go'
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Cafeterias')}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 200
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
})
