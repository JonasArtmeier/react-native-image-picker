import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Headline from './components/Headline';
import Picture from './components/Picture';
import Button from './components/Button';

export default function App() {
  const onPressAction = async () => {
    let permissionResult = await ImagePicker.request;
  };

  return (
    <View style={styles.container}>
      <Headline label="Title"></Headline>
      <Text style={styles.text}>hi</Text>
      <Picture
        source={{
          uri:
            'https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        }}
      ></Picture>
      <Button labe="click it" onPress={onPressAction}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'yellow',
  },
  images: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
