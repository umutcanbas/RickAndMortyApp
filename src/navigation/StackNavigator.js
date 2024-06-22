import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from './routes';

import EpisodeDetail from '../Pages/EpisodeDetail';
import CharacterDetail from '../Pages/CharacterDetail';
import Home from '../Pages/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.HOME} component={Home} />

      <Stack.Screen name={routes.EPISODE_DETAIL} component={EpisodeDetail} />
      <Stack.Screen
        name={routes.CHARACTER_DETAIL}
        component={CharacterDetail}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
