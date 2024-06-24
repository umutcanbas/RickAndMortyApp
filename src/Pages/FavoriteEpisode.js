import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import routes from '../navigation/routes';

import {useNavigation} from '@react-navigation/native';

import {addFavoriteEpisode, removeFavoriteEpisode} from '../redux/favorite';

import {useSelector, useDispatch} from 'react-redux';

import HeartIcon from '../assets/svg/heart.svg';

const FavorieEpisode = () => {
  const favoriteEpisodes = useSelector(
    state => state.favorite.favoriteEpisodeList,
  );

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handlePress = item => {
    const isFavorite = favoriteEpisodes.some(episode => episode.id === item.id);

    if (isFavorite) {
      dispatch(removeFavoriteEpisode(item));
    } else {
      dispatch(addFavoriteEpisode(item));
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteEpisodes}
        renderItem={({item}) => {
          const isFavorite = favoriteEpisodes.some(
            episode => episode.id === item.id,
          );

          return (
            <TouchableOpacity
              style={styles.content}
              onPress={() =>
                navigation.navigate(routes.EPISODE_DETAIL, {
                  episodeDetails: item,
                })
              }>
              <Text style={styles.nameText}>{item.name}</Text>

              <TouchableOpacity
                onPress={() => handlePress(item)}
                style={styles.heartIcon}>
                <HeartIcon
                  width={25}
                  height={25}
                  fill={isFavorite ? '#dd0000' : '#ffffff'}
                />
              </TouchableOpacity>

              <Text style={styles.episodeText}>{item.episode}</Text>
              
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default FavorieEpisode;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'black',
    width: 200,
  },
  episodeText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'grey',
  },
});
