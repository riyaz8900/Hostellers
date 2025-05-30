import { configureStore } from '@reduxjs/toolkit'
import hostelReducer from '../features/hostel/hostelSlice'
import searchReducer from '../features/search/searchSlice'
export const store = configureStore({
  reducer: {
     hostel: hostelReducer,
     search:searchReducer
  },
})