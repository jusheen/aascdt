import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Cafeterias from './src/components/Cafeterias';
import Login from './src/components/Login/Login.js';

const Cafes = createStackNavigator({
  Cafe: {
    screen: Cafeterias
  }
})

export default createAppContainer(Cafes);


// login code. commenting while implementing navigation
// const styles = StyleSheet.create({
  //   center: {
    //     alignItems: 'center',
    //   },
    // });

    // const App = () => {
      //   return (
        //     <Login />
        //   )
        // };


        // export default App;