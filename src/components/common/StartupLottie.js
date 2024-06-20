import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LottieView from 'lottie-react-native';

const StartupLottie = () => {
  return (
    <LottieView
      loop
      autoPlay
      style={styles.lottie}
      source={require('../../assets/lottieFiles/palestineFlag.json')}
    />
  );
};

export default StartupLottie;

const styles = StyleSheet.create({
  lottie: {
    height: 200,
    width: 200,
  },
});
