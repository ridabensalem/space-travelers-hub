import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  isLoading: false,
};

const FETCH_DRAGON_DATA = 'dragons/getDragonsData';

export const getDragonData = createAsyncThunk(FETCH_DRAGON_DATA, async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/dragons');

    const dragonApi = [];
    response.data.forEach((data) => {
      const {
        id,
        name: dragonName,
        description,
        flickr_images: flickrImages,
      } = data;
      const dragonData = {
        id,
        dragonName,
        description,
        flickrImages,
        reserved: false,
      };
      dragonApi.push(dragonData);
    });

    return dragonApi;
  } catch (error) {
    return error;
  }
});

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  extraReducers: {
    [getDragonData.fulfilled]: (state, action) => ({
      ...state,
      dragons: action.payload,
      isLoading: false,
    }),
    [getDragonData.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [getDragonData.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
  },
});

export default dragonSlice.reducer;
