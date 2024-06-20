import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {SkipItColors} from '../../../constants/SkipItColors';
import {SkipItFonts} from '../../../constants/SkipItFonts';

import LinkIcon from 'react-native-vector-icons/Feather';

const PrimaryButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPrimaryButtonPressed}
      style={styles.container}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
      <LinkIcon
        style={styles.icon}
        name="external-link"
        size={25}
        color={SkipItColors.BachgroundWhite}
      />
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: SkipItColors.FocusRed,
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: SkipItFonts.BoldFont,
    color: SkipItColors.BachgroundWhite,
  },
  icon: {
    marginLeft: 10,
  },
});
