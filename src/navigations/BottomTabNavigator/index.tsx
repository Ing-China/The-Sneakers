import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../types/BottomTabTypes';
import {
  CartScreen,
  HomeScreen,
  OrderHistoryScreen,
  ProfileScreen,
  SearchScreen,
} from '../../screens';
import {useTheme} from '../../hooks';
import {Icons} from '../../constants';
import {homeHeaderOption} from '../../headerOptions';
import {StackParamList} from '../../types/StackTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={HomeScreen}
        options={homeHeaderOption}
      />
    </Stack.Navigator>
  );
};

export const BottomTabNavigator = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarActiveTintColor: colors.icon,
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.HOME
              color={focused ? colors.icon : 'grey'}
              fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.SEARCH
              color={focused ? colors.icon : 'grey'}
              fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.CART
              color={focused ? colors.icon : 'grey'}
              fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: 'Cart',
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.HISTORY
              color={focused ? colors.icon : 'grey'}
              fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: 'Order History',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.PROFILE
              color={focused ? colors.icon : 'grey'}
              fill={focused ? colors.icon : 'transparent'}
            />
          ),

          tabBarLabel: 'Profile',

          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
