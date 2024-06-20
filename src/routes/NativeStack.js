import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Startup from '../screens/Startup';
import {MyBottomTabs} from './BottomTabs';
import ProductDetail from '../screens/ProductDetail';

export const MyNativeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="BottomTabs" component={MyBottomTabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
