import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Swiper from 'react-native-swiper';
import Profile from './Profile';

const Tab = createBottomTabNavigator();
//

const CafeteriasScreen = () => {
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
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../images/croads_2.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Crossroads</Text>
              <Text style={styles.cardDetails}>
                Fan favorite.
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../images/cafe3.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Cafe 3</Text>
              <Text style={styles.cardDetails}>
                The infamous and notorious. At least it's vegan.
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../images/i-house.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>International House</Text>
              <Text style={styles.cardDetails}>
                Ah, I see you're a man of culture as well.
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../images/clark-kerr.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Clark Kerr</Text>
              <Text style={styles.cardDetails}>
                Never been here, but heard it's pretty good.
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../images/foothill.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Foothill</Text>
              <Text style={styles.cardDetails}>
                They have couches here, that's pretty cool.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};

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
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});