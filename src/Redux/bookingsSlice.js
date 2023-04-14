import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  {guestList}  from '../TemplatesTable/guestList.js';
import { delayFunction, requestGET } from './helpers/delayFunction.js';
const bookings = guestList
const url = process.env.REACT_APP_URL

const initialState = {
  list:[],
  singleBooking:{},
  loading: false,
  error: false
}
  export const fetchAllBookings = createAsyncThunk(
    'bookings/requestGET',
      async (
      ) => {
        // return await delayFunction(bookings)
        return await requestGET(`${url}/bookings`,"GET")
    })
    export const getSingleBooking = createAsyncThunk(
      'bookings/getSinlgeBooking',
        async (id) => {
          return await requestGET(`${url}/bookings/${id}`,"GET")
          // const fetchSingleBooking = bookings.find(booking => booking.id === id);
          // return await delayFunction(fetchSingleBooking)
        })
      export const deleteBooking = createAsyncThunk(
        'bookings/deleteBooking',
        async (id) => {
          return await requestGET(`${url}/bookings/${id}`,"DELETE")
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
            state.status = 'succeeded';
            state.singleBooking = action.payload
            // console.log(state.singleBooking);
            // state.singleBooking= state.list.find(booking => booking.id == action.payload)
          })
         
        builder
        .addCase (deleteBooking.pending, (state) =>{
          console.log('loading');
          state.status = 'loading'
        })
          .addCase(deleteBooking.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.list = state.list.filter(booking => Number(booking.id) !== Number(action.payload))
            console.log(action.payload);
          })
          .addCase (deleteBooking.rejected, (state) =>{
            console.log('loading');
            state.status = 'failed'
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