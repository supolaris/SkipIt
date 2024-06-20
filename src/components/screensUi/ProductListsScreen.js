import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {SkipItColors} from '../../constants/SkipItColors';

import SecondaryHeader from '../common/headers/SecondaryHeader';
import PrimaryTextInput from '../common/PrimaryTextInput';

import {BoycotProductList} from '../../assets/data/FlatListData';

import Animated from 'react-native-reanimated';

const width = Dimensions.get('window').width;

const ProductListsScreen = props => {
  const renderBoycotProductList = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderContainer}
        onPress={() => props.onBrandPressed(item)}>
        <View style={styles.renderTitleView}>
          <Text numberOfLines={1} style={styles.brandTitleText}>
            {item.productOwner}
          </Text>
        </View>
        <View style={styles.renderLogoView}>
          <Animated.Image
            sharedTransitionTag="productLogo"
            resizeMode="stretch"
            style={styles.renderBrandLogo}
            source={item.productImage}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar backgroundColor={SkipItColors.PrimaryGreen} />
      <SecondaryHeader
        titleText="Boycot List"
        value={props.value}
        onChangeText={props.onChangeText}
        showSettingIcon={false}
      />
      <View style={styles.container}>
        <View style={styles.textInputView}>
          <PrimaryTextInput />
        </View>
        <View style={styles.flatListView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={BoycotProductList}
            renderItem={renderBoycotProductList}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </>
  );
};

export default ProductListsScreen;

const styles = StyleSheet.create({
  renderContainer: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 10,
  },
  renderTitleView: {
    alignItems: 'center',
  },
  brandTitleText: {
    width: '80%',
    textAlign: 'center',
    fontSize: 20,
    color: SkipItColors.Black,
  },
  renderLogoView: {},
  renderBrandLogo: {
    height: 150,
    width: 150,
  },

  container: {
    flex: 1,
    backgroundColor: SkipItColors.BachgroundWhite,
  },
  textInputView: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  flatListView: {
    paddingBottom: 120,
    alignItems: 'center',
  },
});
