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
import {Fonts, FontSizes, Icons} from '../../constants';
import {homeHeaderOption} from '../../headerOptions';
import {StackParamList} from '../../types/StackTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="HomeTabs"
//         component={HomeScreen}
//         options={homeHeaderOption}
//       />
//     </Stack.Navigator>
//   );
// };

export const BottomTabNavigator = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarActiveTintColor: colors.icon,
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontFamily: Fonts.REGULAR,
          fontSize: FontSizes.extraSmall,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.HOME
              color={focused ? colors.icon : 'grey'}
              fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: t('home'),
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
          tabBarLabel: t('search'),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.CART
              color={focused ? colors.icon : 'grey'}
              // fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: t('cart'),
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icons.HISTORY
              color={focused ? colors.icon : 'grey'}
              // fill={focused ? colors.icon : 'transparent'}
            />
          ),
          tabBarLabel: t('orderHistory'),
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
          tabBarLabel: t('profile'),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
