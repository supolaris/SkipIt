import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import {SkipItColors} from '../../constants/SkipItColors';
import {SkipItFonts} from '../../constants/SkipItFonts';

import BarCodeIcon from 'react-native-vector-icons/AntDesign';

const PrimaryTextInput = props => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          style={styles.textInput}
          placeholder="Type brand name"
          placeholderTextColor={SkipItColors.Black}
        />
      </View>
      <View style={styles.barCodeTextIconView}>
        <Text style={styles.barCodeText}>Or Scan</Text>
        <View style={{paddingTop: 3}}>
          <BarCodeIcon
            style={styles.barCodeIcon}
            name="barcode"
            size={25}
            color={SkipItColors.Black}
          />
        </View>
      </View>
    </View>
  );
};

export default PrimaryTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: SkipItColors.SecondaryTextGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    //paddingVertical: 15,
    paddingHorizontal: 10,
  },
  textInputView: {},
  textInput: {
    fontSize: 18,
    color: SkipItColors.Black,
  },
  barCodeTextIconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barCodeText: {
    fontSize: 18,
    fontFamily: SkipItFonts.RegularFont,
    color: SkipItColors.Black,
  },
  barCodeIcon: {
    paddingLeft: 10,
  },
});
