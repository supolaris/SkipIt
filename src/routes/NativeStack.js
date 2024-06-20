import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {MyBottomTabs} from './BottomTabs';

export const MyNativeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomTabs" component={MyBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
