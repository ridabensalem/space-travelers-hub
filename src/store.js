import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './features/dragonSlice';

const store = configureStore({
  reducer: {
    dragonReducer,
  },
});

export default store;
