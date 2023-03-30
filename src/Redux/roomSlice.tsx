import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { roomsList } from '../TemplatesTable/roomsList';
import { delayFunction } from './helpers/delayFunction.js';
import{ Room } from '../Interfaces/RoomInterface'

const rooms = roomsList

interface IRoom {
  list: Room[];
  singleRoom: Room | null;
  status: 'loading' | 'succeeded' | 'failed' | null;
  error?:string
}

const initialState : IRoom = {
  list:[],
  singleRoom: null,
  status: null,
  error: ''
}

  export const fetchAllRooms = createAsyncThunk(
    'room/delayFunction',
      async (data) => {
        return await delayFunction(rooms) as Room[]
    })

    export const getSingleRoom = createAsyncThunk(
    'room/getSinlgeRoom',
      async (id: number) => {
        const fetchSingleRoom =rooms.find(room => room.id === id);
        return await delayFunction(fetchSingleRoom) as Room
    })
    export const deleteRoom = createAsyncThunk(
      'room/deleteRoom',
      async (id: number) => {
        return id
      })
    export const addRoom = createAsyncThunk(
      'room/addRoom',
      async (newRoom: Room) => {
        return newRoom
      })
        
    export const editRoom = createAsyncThunk(
    'room/editRoom',
      async (room: Room) => {
        return room
    })

  export const roomSlice = createSlice({
    name:'room',
    initialState,
    reducers:{},
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
          state.error = action.error.message
        })
      builder
          .addCase(getSingleRoom.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.singleRoom = action.payload
        })
         
      builder
          .addCase(deleteRoom.fulfilled, (state,action)=>{
          state.list = state.list.filter(room => room.id !== action.payload)
          console.log(action.payload);
            
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

export const selectRoom = (state:any) => state.room.list;

export default roomSlice.reducer