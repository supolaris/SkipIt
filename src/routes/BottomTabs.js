import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SkipItColors} from '../constants/SkipItColors';
import {SkipItFonts} from '../constants/SkipItFonts';

import ProductList from '../screens/ProductList';
import NewsScreen from '../components/screensUi/NewsScreen';
import ScannerScreen from '../components/screensUi/ScannerScreen';
import AboutScreen from '../components/screensUi/AboutScreen';

import ListIcon from 'react-native-vector-icons/Feather';
import NewsIcon from 'react-native-vector-icons/Ionicons';
import ScanIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AboutIcon from 'react-native-vector-icons/Ionicons';

export const MyBottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="NewsScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: SkipItColors.PrimaryGreen,
        },
      }}>
      <Tab.Screen
        name="ProductList"
        component={ProductList}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View>
                <Text
                  style={[
                    styles.tabBarLabelText,
                    {
                      color: focused
                        ? SkipItColors.FocusRed
                        : SkipItColors.BachgroundWhite,
                    },
                  ]}>
                  List
                </Text>
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <ListIcon
                name="list"
                size={30}
                color={
                  focused ? SkipItColors.FocusRed : SkipItColors.BachgroundWhite
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ScannerScreen"
        component={ScannerScreen}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View>
                <Text
                  style={[
                    styles.tabBarLabelText,
                    {
                      color: focused
                        ? SkipItColors.FocusRed
                        : SkipItColors.BachgroundWhite,
                    },
                  ]}>
                  Scan
                </Text>
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <ScanIcon
                name="barcode-scan"
                size={30}
                color={
                  focused ? SkipItColors.FocusRed : SkipItColors.BachgroundWhite
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View>
                <Text
                  style={[
                    styles.tabBarLabelText,
                    {
                      color: focused
                        ? SkipItColors.FocusRed
                        : SkipItColors.BachgroundWhite,
                    },
                  ]}>
                  News
                </Text>
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <NewsIcon
                name="newspaper-outline"
                size={30}
                color={
                  focused ? SkipItColors.FocusRed : SkipItColors.BachgroundWhite
                }
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <View>
                <Text
                  style={[
                    styles.tabBarLabelText,
                    {
                      color: focused
                        ? SkipItColors.FocusRed
                        : SkipItColors.BachgroundWhite,
                    },
                  ]}>
                  About
                </Text>
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <AboutIcon
                name="information-circle-outline"
                size={30}
                color={
                  focused ? SkipItColors.FocusRed : SkipItColors.BachgroundWhite
                }
              />
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabelText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: SkipItFonts.HeadingFont,
  },
});
