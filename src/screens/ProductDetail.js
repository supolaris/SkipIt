import React from 'react';
import {Linking} from 'react-native';

import ProductDetailScreen from '../components/screensUi/ProductDetailScreen';

const ProductDetail = ({route}) => {
  const {item} = route.params;

  const openProof = () => {
    Linking.openURL(item.productProof);
  };
  return <ProductDetailScreen item={item} openProof={openProof} />;
};

export default ProductDetail;
