import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ROCKET_URL = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rocketList: [],
  isLoading: true,
  error: null,
};

export const getRocketsDataFromAPI = () => createAsyncThunk(
  'getRocketsData', async () => {
    const rocketData = await fetch(ROCKET_URL)
      .then((response) => response.json())
      .catch(() => false);
    return rocketData;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRocketsDataFromAPI.fulfilled, (state, action) => {
        const rockets = action.payload;
        const rocketArr = Object.keys(rockets).map((id) => ({
          id,
          ...rockets[id][0],
        }));
        return { ...state, isLoading: false, rocketList: rocketArr };
      });
  },
});

export default rocketSlice.reducer;
