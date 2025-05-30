// src/features/search/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedState: null,
  selectedCity: null,
  checkInDate: null, // Will store ISO string
  checkOutDate: null, // Will store ISO string
  filteredHostels: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSelectedState: (state, action) => {
      state.selectedState = action.payload;
      state.selectedCity = null;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    // setCheckInDate: (state, action) => {
    //   state.checkInDate = action.payload ? action.payload.toISOString() : null;
    // },
    // setCheckOutDate: (state, action) => {
    //   state.checkOutDate = action.payload ? action.payload.toISOString() : null;
    // },
    // In searchSlice.js
setCheckInDate: (state, action) => {
  state.checkInDate = action.payload; // Already an ISO string
},
setCheckOutDate: (state, action) => {
  state.checkOutDate = action.payload; // Already an ISO string
},
    setFilteredHostels: (state, action) => {
      state.filteredHostels = action.payload;
    },
    resetSearch: (state) => {
      return initialState;
    }
  },
});

export const {
  setSelectedState,
  setSelectedCity,
  setCheckInDate,
  setCheckOutDate,
  setFilteredHostels,
  resetSearch
} = searchSlice.actions;

export default searchSlice.reducer;