import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

import {SkipItColors} from '../../constants/SkipItColors';

import SecondaryHeader from '../common/headers/SecondaryHeader';

import PrimaryTextInput from '../common/PrimaryTextInput';

const NewsScreen = props => {
  return (
    <>
      <StatusBar backgroundColor={SkipItColors.PrimaryGreen} />
      <SecondaryHeader
        titleText="News"
        value={props.value}
        onChangeText={props.onChangeText}
        showSettingIcon={false}
      />
      <View style={styles.container}>
        <Text>NewsScreen</Text>
      </View>
    </>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SkipItColors.BachgroundWhite,
  },
});
