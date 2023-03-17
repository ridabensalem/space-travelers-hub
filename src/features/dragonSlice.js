import { createSlice } from '@reduxjs/toolkit';
import fetchDragon from '../components/API/apiDragons';

const initialState = {
  dragonStore: [],
  status: 'idle',
  error: null,
};

export const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const { id } = action.payload;
      state.dragonStore = state.dragonStore.map((dragon) => (
        dragon.id === id ? { ...dragon, reserved: true } : dragon));
    },
    cancelDragon: (state, action) => {
      const { id } = action.payload;
      state.dragonStore = state.dragonStore.map((dragon) => (
        dragon.id === id ? { ...dragon, reserved: false } : dragon));
    },
  },
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

export const { reserveDragon, cancelDragon } = dragonSlice.actions;

export default dragonSlice.reducer;
