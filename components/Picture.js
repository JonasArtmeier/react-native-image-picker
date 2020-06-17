import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Picture = (props) => {
  return <Image style={styles.images} source={props.source}></Image>;
};

const styles = StyleSheet.create({
  images: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Picture;
