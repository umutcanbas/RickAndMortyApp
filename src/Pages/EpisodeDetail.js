import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Header from '../Components/Header';
import routes from '../navigation/routes';

const EpisodeDetail = ({route}) => {
  const {episodeDetails} = route.params;

  const [characters, setCharacters] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const characterDetails = await Promise.all(
        episodeDetails.characters.map(async characterUrl => {
          const response = await fetch(characterUrl);

          const characterData = await response.json();

          return characterData;
        }),
      );
      setCharacters(characterDetails);
    };

    fetchCharacterDetails();
  }, [episodeDetails.characters]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={episodeDetails.episode} />

      <Text style={styles.nameText}>{episodeDetails.name}</Text>
      <Text style={styles.airDateText}>
        Air Date: {episodeDetails.air_date}
      </Text>
      <Text style={styles.charactersTitle}>Characters:</Text>
      <ScrollView style={styles.scrollView}>
        {characters.map((character, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={character.id}
            onPress={() => navigation.navigate(routes.CHARACTER_DETAIL, {character})}>
            <View style={styles.characterNameContainer}>
              <Text style={styles.characterNameText}>{character.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EpisodeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  episodeText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
  },
  airDateText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    marginBottom: 20,
  },
  charactersTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
  },
  characterNameContainer: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 100,
    borderWidth: 0.2,
    borderRadius: 45,
  },
  characterNameText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
