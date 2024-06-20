import {View, Text} from 'react-native';
import React, {useState} from 'react';

import NewsScreen from '../components/screensUi/NewsScreen';

const News = () => {
  const [textInputValue, setTextInputValue] = useState();

  return <NewsScreen value={textInputValue} onChangeText={setTextInputValue} />;
};

export default News;
