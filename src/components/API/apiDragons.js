import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BaseURL = 'https://api.spacexdata.com/v3/dragons';

const fetchDragon = createAsyncThunk('books/fetchDragons', async () => {
  const response = await axios.get(BaseURL);
  const dragons = Object.keys(response.data).map((key) => ({
    mission_id: key,
    ...response.data[key],
  }));
  return dragons;
});
export default fetchDragon;
