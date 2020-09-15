import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ProfileScreen from './ProfileScreen';
import CafeteriaCard from '../components/CafeteriaCard';
import Cafe3Screen from './Cafe3Screen';

// image paths
const CAFE1_IMG = require('../images/croads_2.jpg');
const CAFE1_NAME = 'Crossroads';
const CAFE1_DESCRIPTION = 'Fan favorite.';

const CAFE2_IMG = require('../images/cafe3.jpg');
const CAFE2_NAME = 'Cafe 3';
const CAFE2_DESCRIPTION = "The infamous Cafe 3. At least it's vegan.";

const CAFE3_IMG = require('../images/i-house.jpg');
const CAFE3_NAME = 'International House';
const CAFE3_DESCRIPTION = "Ah, I see you're a man of culture as well.";

const CAFE4_IMG = require('../images/clark-kerr.jpg');
const CAFE4_NAME = 'Clark Kerr';
const CAFE4_DESCRIPTION = "Never been here, but heard it's pretty good.";

const CAFE5_IMG = require('../images/foothill.png');
const CAFE5_NAME = 'Foothill';
const CAFE5_DESCRIPTION = "They have couches here, that's pretty cool.";

const CafeteriasFeed = () => {
  const theme = useTheme();
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'}/>
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            autoplayTimeout={5}
            height={200}
          >
            <View style={styles.slide}>
              <Image
                source={require('../images/aascdt-banner.png')}
                resizeMode='cover'
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../images/founder.png')}
                resizeMode='cover'
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../images/bears_eating_together.jpg')}
                resizeMode='cover'
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.cardsWrapper}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333',
            }}>
            Dining Halls
          </Text>
          <CafeteriaCard
            imagePath={CAFE1_IMG}
            name={CAFE1_NAME}
            description={CAFE1_DESCRIPTION}
          />
          <CafeteriaCard
            imagePath={CAFE2_IMG}
            name={CAFE2_NAME}
            description={CAFE2_DESCRIPTION}
          />
          <CafeteriaCard
            imagePath={CAFE3_IMG}
            name={CAFE3_NAME}
            description={CAFE3_DESCRIPTION}
          />
          <CafeteriaCard
            imagePath={CAFE4_IMG}
            name={CAFE4_NAME}
            description={CAFE4_DESCRIPTION}
          />
          <CafeteriaCard
            imagePath={CAFE5_IMG}
            name={CAFE5_NAME}
            description={CAFE5_DESCRIPTION}
          />
        </View>
      </View>
    </ScrollView>
  )
};

const CafeStack = createStackNavigator();

const CafeteriasScreen = () => {
  return (
    <CafeStack.Navigator>
      <CafeStack.Screen
        name='Home'
        component={CafeteriasFeed}
        options={({ route }) => ({
          headerLeft: null,
        })}
      />
      <CafeStack.Screen
        name='Crossroads'
        component={Cafe3Screen}
      />
      <CafeStack.Screen
        name='Cafe 3'
        component={Cafe3Screen}
      />
      <CafeStack.Screen
        name='International House'
        component={Cafe3Screen}
      />
      <CafeStack.Screen
        name='Clark Kerr'
        component={Cafe3Screen}
      />
      <CafeStack.Screen
        name='Foothill'
        component={Cafe3Screen}
      />
    </CafeStack.Navigator>
  )
};

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Cafe 3';
  switch (routeName) {
    case 'CafeteriasFeed':
      return 'Cafeteriass';
    case 'Profile':
      return 'My profile';
    case 'Cafe 3':
      return 'Cafe3';
  }
}

const Tab = createBottomTabNavigator();

export default function Cafeterias({ navigation }) {

  const [CafeNavTabName, setCafeNavTabName] = useState('Cafeterias');
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Cafeterias'
        component={CafeteriasScreen}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '100%',
    marginTop: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
});
