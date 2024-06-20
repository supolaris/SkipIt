import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProductList from '../screens/ProductList';
import NewsScreen from '../components/screensUi/NewsScreen';
import ScannerScreen from '../components/screensUi/ScannerScreen';
import AboutScreen from '../components/screensUi/AboutScreen';

export const MyBottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="NewsScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="ProductList" component={ProductList} />
      <Tab.Screen name="NewsScreen" component={NewsScreen} />
      <Tab.Screen name="ScannerScreen" component={ScannerScreen} />
      <Tab.Screen name="AboutScreen" component={AboutScreen} />
    </Tab.Navigator>
  );
};
