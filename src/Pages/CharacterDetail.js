import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {addFavoriteCharacter, removeFavoriteCharacter} from '../redux/favorite';

import Header from '../Components/Header';

import HeartIcon from '../assets/svg/heart.svg';

const CharacterDetail = ({route}) => {
  const {character} = route.params;

  const dispatch = useDispatch();

  const [isPressed, setIsPressed] = useState(false);

  const favoriteCharacters = useSelector(
    state => state.favorite.favoriteCharacterList,
  );

  const isFavorite = favoriteCharacters.find(c => c.id === character.id);

  const handlePress = () => {
    setIsPressed(!isPressed);
    if (isFavorite) {
      dispatch(removeFavoriteCharacter(character));
    } else {
      dispatch(addFavoriteCharacter(character));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={character.name} back={true}/>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: character.image}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        style={styles.favoriteContainer}
        onPress={() => handlePress()}>
        <HeartIcon
          width={30}
          height={30}
          fill={isFavorite ? '#dd0000' : '#ffffff'}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text>Species:</Text>
          <Text> {character.species}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text>Status:</Text>
          <Text> {character.status}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text>Origin:</Text>
          <Text> {character.origin.name}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text>Gender:</Text>
          <Text> {character.gender}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text>Location:</Text>
          <Text> {character.location.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    height: 400,
  },
  content: {
    margin: 5,
    padding: 10,
    borderWidth: 0.2,
    borderColor: 'black',
    borderRadius: 15,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 7,
  },
  favoriteContainer: {
    position: 'absolute',
    right: 20,
    top: 170,
  },
});
