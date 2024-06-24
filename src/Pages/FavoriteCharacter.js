import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addFavoriteCharacter, removeFavoriteCharacter } from '../redux/favorite';

import routes from '../navigation/routes';

import { useNavigation } from '@react-navigation/native';

import HeartIcon from '../assets/svg/heart.svg';

const FavoriteCharacter = () => {
  const favoriteCharacters = useSelector(
    state => state.favorite.favoriteCharacterList,
  );
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handlePress = (character) => {
    const isFavorite = favoriteCharacters.some(c => c.id === character.id);

    if (isFavorite) {
      dispatch(removeFavoriteCharacter(character));
    } else {
      dispatch(addFavoriteCharacter(character));
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteCharacters}
        renderItem={({ item }) => {
          const isFavorite = favoriteCharacters.some(c => c.id === item.id);

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate(routes.CHARACTER_DETAIL, { character: item })
              }
              style={styles.content}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
              </View>

              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>

              <TouchableOpacity
                style={styles.favoriteContainer}
                onPress={() => handlePress(item)}>
                <HeartIcon
                  width={30}
                  height={30}
                  fill={isFavorite ? '#dd0000' : '#ffffff'}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default FavoriteCharacter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 21,
    color: 'black',
  },
  favoriteContainer: {
    position: 'absolute',
    right: 25,
    top: 50,
  },
});
