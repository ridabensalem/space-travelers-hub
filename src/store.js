import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './features/rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
