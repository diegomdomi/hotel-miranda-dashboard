import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  {guestList}  from '../TemplatesTable/guestList.js';

const initialState = {
  list:[],
  loading: false,
  error: false

  }

  const bookings = guestList
  function delayFunction (data, time = 200){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data);
            console.log(data);
        },time)
    })
  }

  export const fetchAsyncBookings = createAsyncThunk(
    'bookings/delayFunction',
      async (data) => {
        return await delayFunction(bookings)
    })


  export const bookingsSlice = createSlice({
    name:'bookings',
    initialState,
    extraReducers: {
      [fetchAsyncBookings.pending]: (state,action) => {
        console.log("Loading...");
        state.loading = true;
        state.error = false;
      },
      [fetchAsyncBookings.fulfilled]: (state, action) => {
        console.log("Load completed");
        state.list = action.payload;
        state.loading = false;
        state.error = false;
      },
      [fetchAsyncBookings.rejected]: (state, action) => {
        console.log("Failure while fetching data!");
        state.loading = false;
        state.error = true;
      },
    },
  })

export const selectBookings= (state) => state.bookings.list;

export default bookingsSlice.reducer