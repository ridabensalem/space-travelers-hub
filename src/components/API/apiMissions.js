import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BaseURL = 'https://api.spacexdata.com/v3/missions';

const fetchMission = createAsyncThunk(
  'books/fetchMissions',
  async () => {
    const response = await axios.get(
      BaseURL,
    );
    const missions = Object.keys(response.data).map((key) => ({
      mission_id: key,
      reserved: false,
      action: false,
      ...response.data[key],
    }));
    return missions;
  },
);
export default fetchMission;
