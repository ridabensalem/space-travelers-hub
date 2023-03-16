import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './features/dragonSlice';
import missionReducer from './features/missionSclice';
import dragonReducer from './dragonSlice';
import rocketsReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    dragonReducer,
    missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
