import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const FormButton = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked')}
      />
    </View>
  )
}

export default FormButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})