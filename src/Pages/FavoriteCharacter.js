import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';

import routes from '../navigation/routes';

import {useNavigation} from '@react-navigation/native';

const FavoriteCharacter = () => {
  const favoriteCharacters = useSelector(
    state => state.favorite.favoriteCharacterList,
  );

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteCharacters}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate(routes.CHARACTER_DETAIL, {character: item})
            }
            style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.name}</Text>
            </View>

            <View style={styles.imageContainer}>
              <Image
                source={{uri: item.image}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        )}
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
});
