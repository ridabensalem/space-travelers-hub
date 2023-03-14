import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './features/missionSclice';

const store = configureStore({
  reducer: {
    missionReducer,
  },
});

export default store;
