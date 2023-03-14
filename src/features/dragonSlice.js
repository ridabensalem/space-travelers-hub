import { createSlice } from '@reduxjs/toolkit';
import fetchDragon from '../components/API';
const initialState = {
  dragonStore: [],
  status: 'idle',
  error: null,
};

export const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragonStore = action.payload;
      })
      .addCase(fetchDragon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dragonSlice.reducer;