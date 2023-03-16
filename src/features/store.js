import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSclice';
import dragonReducer from './dragonSlice';
import rocketsReducer from './rockets/rocketSlice';

const Store = configureStore({
  reducer: {
    dragonReducer,
    missionReducer,
    rockets: rocketsReducer,
  },
});

export default Store;
