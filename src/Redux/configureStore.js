import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dragonSlice from './dragons/dragonSlice';

const rootReducer = combineReducers({
  dragons: dragonSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
