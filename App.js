import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Button, Text, View, StyleSheet } from 'react-native';
import Login from './src/components/Login/Login';
import Cafeterias from './src/components/Cafeterias.js';



function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Cafeterias';
  switch (routeName) {
    case 'Cafeterias':
      return 'Dining Halls';
    case 'Profile':
      return 'My profile';
  }
}

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
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerLeft: null,
            gesturesEnabled: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

// options={
//   {
//     headerTitle: 'Dining Halls',
//     headerLeft: null,
//     gesturesEnabled: false,
//     headerStyle: {
//       backgroundColor: '#FFF',
//     },
//     headerTintColor: '#000',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   }
// }





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


