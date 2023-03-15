import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './features/dragonSlice';
import missionReducer from './features/missionSclice';

const store = configureStore({
  reducer: {
    dragonReducer,
    missionReducer,
  },
});

export default store;
