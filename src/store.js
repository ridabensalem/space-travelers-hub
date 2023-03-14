import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './features/rockets/rocketSlice';

const store = configureStore({
  reducers: {
    rocket: rocketReducer,
  },
});

export default store;
