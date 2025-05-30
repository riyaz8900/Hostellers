import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hostels: [],
  loading: false,
};

const hostelSlice = createSlice({
  name: 'hostel',
  initialState,
  reducers: {
    setHostels: (state, action) => {
      state.hostels = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setHostels, setLoading } = hostelSlice.actions;

export default hostelSlice.reducer;
