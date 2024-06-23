import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import routes from './routes';

import Home from '../assets/svg/home-line.svg';
import HomeFill from '../assets/svg/home-fill.svg';
import Favorite from '../assets/svg/bookmark-line.svg';
import FavoriteFill from '../assets/svg/bookmark-fill.svg';

import Favorities from '../Pages/Favorities';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderColor: 'white',
          },
          tabBarIcon: ({focused, color}) => {
            let Icon;

            if (route.name === routes.STACK_NAVIGATOR) {
              Icon = focused ? HomeFill : Home;
            } else if (route.name === routes.FAVORITIES) {
              Icon = focused ? FavoriteFill : Favorite;
            }

            return <Icon width={30} height={30} fill={color} />;
          },
          tabBarActiveTintColor: '#778899',
          tabBarInactiveTintColor: '#888',
        })}>
        <Tab.Screen name={routes.STACK_NAVIGATOR} component={StackNavigator} />
        <Tab.Screen name={routes.FAVORITIES} component={Favorities} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
