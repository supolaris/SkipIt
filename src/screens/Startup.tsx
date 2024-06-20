import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import StartupScreen from '../components/screensUi/StartupScreen';

import {useNavigation} from '@react-navigation/native';

const Startup = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomTabs');
    }, 1000 * 3);
  }, []);

  return <StartupScreen />;
};

export default Startup;
