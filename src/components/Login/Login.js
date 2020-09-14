import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm'
export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/calbear_logo.png')}
          />
          <Text style={styles.title}> #EatingisSocial</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigation={navigation}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 250
  },
  logo: {
    width: 105,
    height: 159
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
})
