import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import routes from './routes';


import Favorities from '../Pages/Favorities';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderColor: 'white',
          },
        }}>
        <Tab.Screen name={routes.STACK_NAVIGATOR} component={StackNavigator} />
        <Tab.Screen name={routes.FAVORITIES} component={Favorities} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
