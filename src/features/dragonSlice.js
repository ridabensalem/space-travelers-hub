import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BaseURL = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragon = createAsyncThunk('dragon/fetchDragon', async () => {
  const response = await axios.get(BaseURL);
  const dragons = Object.keys(response.data).map((key) => ({
    id: key,
    ...response.data[key],
    reserved: false,
  }));
  return dragons;
});

const initialState = {
  dragons: [],
  status: 'idle',
  error: null,
};

export const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const id = action.payload;
      state.dragons = state.dragons.map((dragon) => {
        if (dragon.id === id) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = action.payload;
      })
      .addCase(fetchDragon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveDragon } = dragonSlice.actions;

export default dragonSlice.reducer;
