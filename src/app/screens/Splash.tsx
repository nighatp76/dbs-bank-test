import React, { useState, useRef, useEffect } from 'react'
import { Text, View, ImageBackground, Animated, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Splash = (props: any) => {

  useEffect(() => {
    moveForward();
  }, []);
  const moveForward = async () => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 2000);

  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.tile}>version: 1.0.0</Text>
      <Text style={styles.text}>DBS TEST APP</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  text: {
    fontSize: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  tile: {
    textAlign: 'right',
    marginRight: 15,
    marginTop: 15,
    fontSize: 14,
    fontWeight: '600',
  },
})
export default Splash;