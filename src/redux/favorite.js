import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteEpisodeList: [],
  favoriteCharacterList: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteEpisode: (state, action) => {
      const episode = action.payload;
      const isFavorite = state.favoriteEpisodeList.find(item => item.id === episode.id);

      if (!isFavorite) {
        state.favoriteEpisodeList.push(episode);
      }
    },
    removeFavoriteEpisode: (state, action) => {
      const episode = action.payload;
      state.favoriteEpisodeList = state.favoriteEpisodeList.filter(item => item.id !== episode.id);
    },
    addFavoriteCharacter: (state, action) => {
      const character = action.payload;
      const isFavorite = state.favoriteCharacterList.find(item => item.id === character.id);

      if (!isFavorite) {
        state.favoriteCharacterList.push(character);
      }
    },
    removeFavoriteCharacter: (state, action) => {
      const character = action.payload;
      state.favoriteCharacterList = state.favoriteCharacterList.filter(item => item.id !== character.id);
    },
  },
});

export const {
  addFavoriteEpisode,
  removeFavoriteEpisode,
  addFavoriteCharacter,
  removeFavoriteCharacter,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
