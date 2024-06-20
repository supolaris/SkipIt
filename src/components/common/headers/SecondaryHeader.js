import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {SkipItColors} from '../../../constants/SkipItColors';
import {SkipItFonts} from '../../../constants/SkipItFonts';

import HomeIcon from 'react-native-vector-icons/Ionicons';
import SettingIcon from 'react-native-vector-icons/Fontisto';

import {useNavigation} from '@react-navigation/native';

const SecondaryHeader = props => {
  const navigation = useNavigation();

  const onHomeIconPressed = () => {};
  const onSettingIconPressed = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.emptyView}></View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{props.titleText}</Text>
      </View>
      <View style={styles.iconView}>
        {/* {props.showSettingIcon === true ? ( */}
        <SettingIcon
          onPress={onSettingIconPressed}
          style={styles.icon}
          name="player-settings"
          size={30}
          color={SkipItColors.BachgroundWhite}
        />
        {/* ) : null} */}
        <HomeIcon
          onPress={onHomeIconPressed}
          style={styles.icon}
          name="home"
          size={30}
          color={SkipItColors.BachgroundWhite}
        />
      </View>
    </View>
  );
};

export default SecondaryHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: SkipItColors.PrimaryGreen,
  },
  emptyView: {
    flex: 1,
  },
  titleView: {
    flex: 4,
  },
  titleText: {
    fontSize: 25,
    fontFamily: SkipItFonts.HeadingFont,
    textAlign: 'center',
    color: SkipItColors.BachgroundWhite,
  },
  iconView: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 5,
  },
});
