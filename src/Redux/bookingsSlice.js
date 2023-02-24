import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  {guestList}  from '../TemplatesTable/guestList.js';

const initialState = {
  list:[],
  singleBooking:null,
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

  export const fetchAllBookings = createAsyncThunk(
    'bookings/delayFunction',
      async (data) => {
        return await delayFunction(bookings)
    })
    export const getSingleBooking = createAsyncThunk(
      'bookings/getSinlgeBooking',
        async (id) => {
          return id
      })
      export const deleteBooking = createAsyncThunk(
        'bookings/deleteBooking',
        async (id) => {
          return id
        })
      export const addBooking = createAsyncThunk(
        'bookings/addBooking',
        async (newRoom) => {
          return newRoom
        })
          
      export const editBooking = createAsyncThunk(
      'bookings/ediBooking',
        async (room) => {
          return room
      })

  export const bookingsSlice = createSlice({
    name:'bookings',
    initialState,
    extraReducers(builder) {
      builder
        .addCase (fetchAllBookings.pending, (state,action) =>{
          console.log('loading');
          state.status = 'loading'
        })
        .addCase(fetchAllBookings.fulfilled, (state, action) =>{
          console.log('load complete');
          state.status = 'succeeded'
          state.list = action.payload
        })
        .addCase(fetchAllBookings.rejected, (state,action) =>{
          console.log('Failure while fetching data!');
          state.status = 'failed'
          state.error = action.error.message
        })
        builder
          .addCase(getSingleBooking.fulfilled, (state, action) =>{
            state.singleBooking= state.list.find(booking => booking.id === action.payload)
          })
         
        builder
          .addCase(deleteBooking.fulfilled, (state,action)=>{
            state.list = state.list.filter(booking => booking.id !== action.payload)
            console.log(action.payload);
            
          })
        builder
          .addCase(addBooking.fulfilled, (state,action)=>{
            state.list = [...state.list,action.payload]
          }) 
        builder     
          .addCase(editBooking.fulfilled, (state,action)=>{
            state.list = state.list.map(booking => booking.id === action.payload.id ? action.payload : booking)
          })
    }
    
  })

export const selectBookings= (state) => state.bookings.list;

export default bookingsSlice.reducer