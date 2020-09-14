import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View, StyleSheet } from 'react-native';
import Login from './src/components/Login/Login';
import Cafeterias from './src/components/Cafeterias.js';

const Stack = createStackNavigator();

// const DetailsScreen = () => {
//   return (
//     <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//     </View>
//   )
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Cafeterias'
          component={Cafeterias}
          options={
            {
              headerTitle: 'Dining Halls',
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App







// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//           headerLeft: null,
//           gesturesEnabled: false,
//         }}
//       >
//         <Stack.Screen
//           name="Login"
//           component={Login}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   center: {
//     alignItems: 'center',
//   },
// });


