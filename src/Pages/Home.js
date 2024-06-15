import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import Header from '../Components/Header';

import {useNavigation} from '@react-navigation/native';

import useFetch from '../Hooks/useFetch';

const Home = () => {
  const navigation = useNavigation();
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const {data, loading, error} = useFetch(
    `https://rickandmortyapi.com/api/episode?page=${page}`,
  );

  useEffect(() => {
    if (!loading && !error && data && data.results) {
      setEpisodes(prevEpisodes => [...prevEpisodes, ...data.results]);

      if (page >= 3) {
        setShowMoreButton(false);
      }
    }
  }, [data, loading, error]);

  const loadMoreEpisodes = () => {
    setPage(page + 1);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.detailButton}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('EpisodeDetail', {episodeDetails: item})
        }>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.episodeText}>{item.episode}</Text>
          </View>
          <Image source={require('../assets/Image.png')} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };

  if (loading && episodes.length === 0) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Episodes" />
      <FlatList
        data={episodes}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderItem}
        ListFooterComponent={() =>
          showMoreButton ? (
            <TouchableOpacity
              style={styles.moreButton}
              onPress={loadMoreEpisodes}>
              <Text style={styles.moreButtonText}>More</Text>
            </TouchableOpacity>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailButton: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 5,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  image: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
    margin: 10,
  },

  itemContainer: {
    padding: 16,
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  episodeText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginTop: 5,
  },
  textContainer: {
    width: 200,
  },
  moreButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
  moreButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});
