import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './features/rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
