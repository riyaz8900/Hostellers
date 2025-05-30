import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedState: null,
  selectedCity: null,
  checkInDate: null, 
  checkOutDate: null,
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

    setCheckInDate: (state, action) => {
      state.checkInDate = action.payload;
    },
    setCheckOutDate: (state, action) => {
      state.checkOutDate = action.payload;
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