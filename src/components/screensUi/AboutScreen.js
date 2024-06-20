import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

import {SkipItColors} from '../../constants/SkipItColors';

import SecondaryHeader from '../common/headers/SecondaryHeader';
import PrimaryTextInput from '../common/PrimaryTextInput';

const AboutScreen = props => {
  return (
    <>
      <StatusBar backgroundColor={SkipItColors.PrimaryGreen} />
      <SecondaryHeader
        titleText="About"
        value={props.value}
        onChangeText={props.onChangeText}
        showSettingIcon={false}
      />
      <View style={styles.container}>
        <Text>About Screen</Text>
      </View>
    </>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SkipItColors.BachgroundWhite,
  },
});
