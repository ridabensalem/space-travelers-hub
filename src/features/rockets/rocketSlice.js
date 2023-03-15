import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ROCKET_URL = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rocketList: [],
};

export const getRocketsDataFromAPI = () => createAsyncThunk(
  'getRocketsData', async () => {
    const response = await fetch(ROCKET_URL)
      .then((res) => res)
      .catch(() => false);
    const rocketData = await response.data.map((obj) => ({
      id: obj.id,
      name: obj.rocket_name,
      type: obj.rocket_type,
      description: obj.description,
      flickrImage: obj.flickr_images[0],
      reserved: false,
    }));
    return rocketData;
  },
);

getRocketsDataFromAPI();

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRocketsDataFromAPI, (state, action) => ({
        ...state, rocketList: action.payload,
      }));
  },
});

export default rocketSlice.reducer;
