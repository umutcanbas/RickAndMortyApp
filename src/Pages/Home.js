import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  Image,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

import useFetch from '../Hooks/useFetch';

const Home = () => {
  const navigation = useNavigation();

  const {data, loading, error} = useFetch(
    'https://rickandmortyapi.com/api/episode',
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.detailButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('EpisodeDetail')}>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.episodeText}> {item.episode}</Text>
          </View>
          <Image source={require('../assets/Image.png')} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.results}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Episodes</Text>
          </View>
        )}
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
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
  },
  itemContainer: {
    padding: 16,
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color:'black'
  },
  episodeText: {
    fontSize: 18,
    fontWeight:'600',
    color:'black',
    marginTop:5
  },
  textContainer: {
   width:200,
  },
});
