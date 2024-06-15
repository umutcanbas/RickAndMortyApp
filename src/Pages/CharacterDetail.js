import {SafeAreaView, Text, StyleSheet, Image, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';

const CharacterDetail = ({route}) => {
  const {character} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header title={character.name} />
      <View style={styles.imageContainer}>
        <Image
          source={{uri: character.image}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

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
});
