import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {SkipItColors} from '../../constants/SkipItColors';
import {SkipItFonts} from '../../constants/SkipItFonts';

import PrimaryButton from '../common/buttons/PrimaryButton';

import Animated, {FadeIn, FadeInLeft} from 'react-native-reanimated';

const ProductDetailScreen = ({item, ...props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.productDetailView}>
        <View style={styles.boycotTextView}>
          <Animated.Text entering={FadeIn.delay(500)} style={styles.boycotText}>
            Boycot!!
          </Animated.Text>
        </View>
        <Animated.Image
          sharedTransitionTag="productLogo"
          style={styles.logoImage}
          source={item.productImage}
        />
        <Animated.Text
          entering={FadeInLeft.delay(600)}
          style={styles.isboycotText}>
          {item.productOwner} is in Boycot list
        </Animated.Text>
        <View style={styles.descriptionView}>
          <Animated.Text
            entering={FadeInLeft.delay(700)}
            style={styles.reasonText}>
            Reason:
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.delay(800)}
            style={styles.descriptionText}>
            {item.productDescription}
          </Animated.Text>
        </View>
        <Animated.View
          entering={FadeInLeft.delay(1000)}
          style={styles.buttonView}>
          <PrimaryButton
            onPrimaryButtonPressed={props.openProof}
            buttonText="View proof"
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  productDetailView: {
    alignItems: 'center',
    margin: 15,
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: SkipItColors.BachgroundWhite,
  },
  boycotTextView: {},
  boycotText: {
    fontSize: 35,
    color: SkipItColors.FocusRed,
    fontFamily: SkipItFonts.BoldFont,
  },
  isboycotText: {
    fontSize: 20,
    color: SkipItColors.FocusRed,
    fontFamily: SkipItFonts.BoldFont,
  },
  logoImage: {
    height: 200,
    width: 200,
  },
  descriptionView: {
    paddingVertical: 15,
  },
  reasonText: {
    paddingBottom: 5,
    fontSize: 20,
    color: SkipItColors.FocusRed,
    fontFamily: SkipItFonts.BoldFont,
  },
  descriptionText: {
    fontSize: 20,
    color: SkipItColors.TextBlack,
    fontFamily: SkipItFonts.RegularFont,
  },
  buttonView: {
    paddingTop: 30,
  },
});
