import { configureStore } from '@reduxjs/toolkit';
import roomReducer from '../Redux/roomSlice';
import bookingsReducer from '../Redux/bookingsSlice'
import usersReducer from '../Redux/userSlice'
export const store = configureStore({
  reducer: {
    roomSlice: roomReducer,
    bookingsSlice: bookingsReducer,
    usersSlice : usersReducer,
  },
});
