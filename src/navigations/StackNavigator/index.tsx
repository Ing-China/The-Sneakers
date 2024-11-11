import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AboutUsScreen,
  CartScreen,
  FavoriteScreen,
  LanguageScreen,
  NotificationScreen,
  OrderHistoryScreen,
  SearchScreen,
} from '../../screens';
import {BottomTabNavigator} from '../BottomTabNavigator';
import {StackParamList} from '../../types/StackTypes';
import {useTheme} from '../../hooks';

const Stack = createStackNavigator<StackParamList>();

export const StackNavigator = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{title: 'Cart'}}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{title: 'Order History'}}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{title: 'Notifications'}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={{title: 'About Us'}}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{title: 'Language'}}
      />
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{title: 'Favorite'}}
      />
    </Stack.Navigator>
  );
};
