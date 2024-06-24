import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Header from '../Components/Header';
import FavorieEpisode from './FavoriteEpisode';
import FavoriteCharacter from './FavoriteCharacter';

import routes from '../navigation/routes';

const Tab = createMaterialTopTabNavigator();

const FavoriteEpisodesList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favorites" />

      <Tab.Navigator>
        <Tab.Screen
          options={{title: 'Favorite Episodes'}}
          name={routes.FAVORITE_EPISODE}
          component={FavorieEpisode}
        />
        <Tab.Screen
          options={{title: 'Favorite Characters'}}
          name={routes.FAVORITE_CHARACTER}
          component={FavoriteCharacter}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default FavoriteEpisodesList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
