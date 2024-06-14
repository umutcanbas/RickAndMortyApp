import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Pages/Home';
import EpisodeDetail from './Pages/EpisodeDetail';
import CharacterDetail from './Pages/CharacterDetail';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'transparent',
        },
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="EpisodeDetail" component={EpisodeDetail} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetail} />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;