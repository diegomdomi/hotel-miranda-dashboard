import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { List } from 'cypress/types/lodash/index.js';
import  {guestList}  from '../TemplatesTable/guestList.js';
import { delayFunction } from './helpers/delayFunction.js';
import {Booking} from '../Interfaces/BookingInterface'
const bookings = guestList

interface IBooking {
  list: Booking[] | [];
  singleBooking: Booking | null;
  status: 'loading' | 'succeeded' | 'failed' | null;
  error?:string
}
const initialState: IBooking = {
  list:[],
  singleBooking:null,
  status:null,
  error:''
  }


  export const fetchAllBookings = createAsyncThunk(
    'bookings/delayFunction',
      async (data) => {
      return await delayFunction(bookings) as Booking[]
    })

  export const getSingleBooking = createAsyncThunk(
    'bookings/getSinlgeBooking',
        async (id:number) => {
        const fetchSingleBooking = bookings.find(booking => booking.id === id);
        return await delayFunction(fetchSingleBooking) as Booking
      })

  export const deleteBooking = createAsyncThunk(
    'bookings/deleteBooking',
        async (id:number) => {
        return id
      })
      
  export const addBooking = createAsyncThunk(
    'bookings/addBooking',
        async (newRoom:Booking) => {
        return newRoom
      })
          
  export const editBooking = createAsyncThunk(
    'bookings/ediBooking',
        async (room:Booking) => {
        return room
      })

  export const bookingsSlice = createSlice({
    name:'bookings',
    initialState,
    reducers:{},
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
            // state.singleBooking= state.list.find(booking => booking.id == action.payload)
          })
         
        builder
          .addCase(deleteBooking.fulfilled, (state,action)=>{
            state.list = state.list.filter(booking => booking.id !== action.payload)
            
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

export const selectBookings = (state:any):Booking[] => state.bookings.list;

export default bookingsSlice.reducer