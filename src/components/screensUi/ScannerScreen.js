import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

import {SkipItColors} from '../../constants/SkipItColors';

import SecondaryHeader from '../common/headers/SecondaryHeader';
import PrimaryTextInput from '../common/PrimaryTextInput';

const ScannerScreen = props => {
  return (
    <>
      <StatusBar backgroundColor={SkipItColors.PrimaryGreen} />
      <SecondaryHeader
        titleText="Find Products"
        value={props.value}
        onChangeText={props.onChangeText}
        showSettingIcon={false}
      />
    </>
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SkipItColors.BachgroundWhite,
  },
});
