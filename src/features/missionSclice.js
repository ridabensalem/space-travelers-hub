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
  reducers: {
    reserveMission: (state, action) => {
      const newState = { ...state };
      newState.missionStore = newState.missionStore.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: !mission.reserved };
        }
        return mission;
      });
      return newState;
    },
    leaveMission: (state, action) => {
      const newState = { ...state };
      newState.missionStore = newState.missionStore.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: !mission.reserved };
        }
        return mission;
      });
      return newState;
    },
  },

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
export const { reserveMission } = missionSlice.actions;
export const { leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
// export const missionSlice = createSlice({
//   name: 'mission',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMission.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchMission.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.missionStore = action.payload;
//       })
//       .addCase(fetchMission.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default missionSlice.reducer;
