import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';

import {useSelector} from 'react-redux';

const FavoriteEpisodesList = () => {

  const favoriteEpisodes = useSelector(
    state => state.favorite.favoriteEpisodeList,
  );

  const favoriteCharacters = useSelector(
    state => state.favorite.favoriteCharacterList,
  );

  return (
    <SafeAreaView>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Favori Bölümlerim
        </Text>
        <FlatList
          data={favoriteEpisodes}
          renderItem={({item}) => (
            <View style={{marginVertical: 5}}>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View style={{margin: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Favori Karakterlerim
        </Text>
        <FlatList
          data={favoriteCharacters}
          renderItem={({item}) => (
            <View style={{marginVertical: 5}}>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteEpisodesList;
