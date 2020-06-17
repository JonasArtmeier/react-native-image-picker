import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Headline = (props) => {
  return <Text style={styles.text}>{props.label}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'yellow',
    marginTop: 0,
  },
});

export default Headline;
