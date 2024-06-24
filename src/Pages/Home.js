import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  Image,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import useFetch from '../Hooks/useFetch';

import routes from '../navigation/routes';

import {addFavoriteEpisode, removeFavoriteEpisode} from '../redux/favorite';

import HeartIcon from '../assets/svg/heart.svg';

import Header from '../Components/Header';

const Home = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

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

  const favoriteEpisodes = useSelector(
    state => state.favorite.favoriteEpisodeList,
  );

  const handlePress = item => {
    const isFavorite = favoriteEpisodes.some(episode => episode.id === item.id);

    if (isFavorite) {
      dispatch(removeFavoriteEpisode(item));
    } else {
      dispatch(addFavoriteEpisode(item));
    }
  };

  const renderItem = ({item}) => {
    const isFavorite = favoriteEpisodes.some(episode => episode.id === item.id);

    return (
      <TouchableOpacity
        style={styles.detailButton}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate(routes.EPISODE_DETAIL, {episodeDetails: item})
        }>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.episodeText}>{item.episode}</Text>

            <View style={styles.favoriteContainer}>
              <TouchableOpacity  onPress={() => handlePress(item)}>
                <HeartIcon
                  width={25}
                  height={25}
                  fill={isFavorite ? '#dd0000' : '#ffffff'}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Image
            source={require('../assets/png/Image.png')}
            style={styles.image}
          />
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
              activeOpacity={0.8}
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
  favoriteContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
