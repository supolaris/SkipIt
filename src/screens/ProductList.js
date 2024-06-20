import React from 'react';

import ProductListsScreen from '../components/screensUi/ProductListsScreen';

import {useNavigation} from '@react-navigation/native';

const ProductList = () => {
  const navigation = useNavigation();
  const onBrandPressed = item => {
    navigation.navigate('ProductDetail', {item: item});
  };

  return <ProductListsScreen onBrandPressed={onBrandPressed} />;
};

export default ProductList;
