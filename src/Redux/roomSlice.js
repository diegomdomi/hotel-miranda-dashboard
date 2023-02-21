import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  list:[],
  loading: false,
  error: false

  }

  function delayFunction (data, time = 200){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data);
        },time)
    })
  }

  export const fetchAsyncRooms = createAsyncThunk(
    'room/delayFunction',
      async (data) => {
        return await delayFunction(data)
    })


  export const roomSlice = createSlice({
    name:'room',
    initialState,
    extraReducers: {
      [fetchAsyncRooms.pending]: (state,action) => {
        console.log("Loading...");
        state.loading = true;
        state.error = false;
      },
      [fetchAsyncRooms.fulfilled]: (state, action) => {
        console.log("Load completed");
        state.list = action.payload;
        state.loading = false;
        state.error = false;
      },
      [fetchAsyncRooms.rejected]: (state, action) => {
        console.log("Failure while fetching data!");
        state.loading = false;
        state.error = true;
      },
    },
  })

export const selectRoom = (state) => state.room.list;

export default roomSlice.reducer