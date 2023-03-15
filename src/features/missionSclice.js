import { createSlice } from '@reduxjs/toolkit';
import fetchMission from '../components/API/apiMissions';

const initialState = {
  missionStore: [],
  status: 'idle',
  error: null,
};

export const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missionStore = action.payload;
      })
      .addCase(fetchMission.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
