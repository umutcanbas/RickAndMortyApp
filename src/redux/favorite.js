import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoriteList: [],
};

const favorite = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    favoriteEpisode: (state, action) => {
      const product = action.payload;
      const isFavorite = state.favoriteList.find(
        item => item.id === product.id,
      );

      if (isFavorite) {
        state.favoriteList = state.favoriteList.filter(
          item => item.id !== product.id,
        );
      } else {
        state.favoriteList.push(product);
      }
    },
  },
});

export const {favoriteEpisode} = favorite.actions;

export default favorite.reducer;
