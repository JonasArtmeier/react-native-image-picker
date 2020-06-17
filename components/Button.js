import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  );
  expo;
};

const styles = StyleSheet.create({
  buttonText: { color: 'red' },
  button: {
    width: 100,
    padding: 20,
    backgroundColor: 'green',
  },
});

export default Button;
