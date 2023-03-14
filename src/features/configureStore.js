import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dragonSlice from './dragonSlice';

const rootReducer = combineReducers({
  dragons: dragonSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
