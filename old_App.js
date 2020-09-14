import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet } from 'react-native';
import Login from './src/components/Login/Login';
import Cafeterias from './src/components/Cafeterias';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerLeft: null,
          gesturesEnabled: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Login />
//     </NavigationContainer>
//   );
// }
// const App = () => {
//   return (
//     <Login />
//   )
// };

// export default App;


