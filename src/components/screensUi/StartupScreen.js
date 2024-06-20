import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import {SkipItColors} from '../../constants/SkipItColors';
import {SkipItFonts} from '../../constants/SkipItFonts';

import LinearGradient from 'react-native-linear-gradient';

import StartupLottie from '../common/StartupLottie';

const StartupScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EE2A35" />
      <LinearGradient
        colors={['#EE2A35', '#009736']}
        style={styles.linearGradient}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>SkipIt</Text>
        </View>
        <View style={styles.lottieView}>
          <StartupLottie />
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>A voice for Palestine</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleView: {},
  titleText: {
    fontSize: 30,
    color: SkipItColors.BachgroundWhite,
    fontFamily: SkipItFonts.BoldFont,
  },
  lottieView: {},
  descriptionView: {},
  descriptionText: {
    fontSize: 30,
    color: SkipItColors.BachgroundWhite,
    fontFamily: SkipItFonts.BoldFont,
  },
});
