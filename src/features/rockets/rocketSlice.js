import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase();
  },
});

export default rocketSlice.reducer;
