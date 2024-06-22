import { configureStore } from '@reduxjs/toolkit';

import favorite from './favorite';

const store = configureStore({
  reducer: {
    favorite,
  },
});

export default store;