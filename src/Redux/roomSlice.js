import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { roomsList } from '../TemplatesTable/roomsList';
import { delayFunction,requestDELETE,requestGET } from './helpers/delayFunction.js';
const url = process.env.REACT_APP_URL

const rooms = roomsList
const initialState = {
  list:[],
  loading: false,
  error: false
}

  export const fetchAllRooms = createAsyncThunk(
    'room/requestGET',
      async (data) => {
        // return await delayFunction(rooms)
        return await requestGET(`${url}/rooms`,"GET")
    })

    export const getSingleRoom = createAsyncThunk(
    'room/getSinlgeRoom',
      async (id) => {
        return id
    })
    export const deleteRoom = createAsyncThunk(
      'room/deleteRoom',
      async (id) => {
        return await requestGET(`${url}/rooms/${id}`,"DELETE")
        // return id
      })
    export const addRoom = createAsyncThunk(
      'room/addRoom',
      async (newRoom) => {
        return newRoom
      })
        
    export const editRoom = createAsyncThunk(
    'room/editRoom',
      async (room) => {
        return room
    })

  export const roomSlice = createSlice({
    name:'room',
    initialState,
    extraReducers(builder) {
      builder
        .addCase (fetchAllRooms.pending, (state,action) =>{
          console.log('loading');
          state.status = 'loading'
        })
        .addCase(fetchAllRooms.fulfilled, (state, action) =>{
          console.log('load complete');
          state.status = 'succeeded'
          state.list = action.payload
        })
        .addCase(fetchAllRooms.rejected, (state,action) =>{
          console.log('Failure while fetching data!');
          state.status = 'failed'
          state.error = action.erros.message
        })
        builder
          .addCase(getSingleRoom.fulfilled, (state, action) =>{
            state.list = state.list.find(room => room.id === action.payload)
          })
         
        builder
          .addCase (deleteRoom.pending, (state,action) =>{
            console.log('loading');
            state.status = 'loading'
          })

          .addCase(deleteRoom.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.list = state.list.filter(room => Number(room.id) !== Number(action.payload))
          })
       
          .addCase (deleteRoom.rejected, (state,action) =>{
            console.log('loading');
            state.status = 'failed'
          })

        builder
          .addCase(addRoom.fulfilled, (state,action)=>{
            state.list = [...state.list,action.payload]
          }) 
        builder     
          .addCase(editRoom.fulfilled, (state,action)=>{
            state.list = state.list.map(room => room.id === action.payload.id ? action.payload : room)
          })
    }
    
  })

export const selectRoom = (state) => state.room.list;

export default roomSlice.reducer