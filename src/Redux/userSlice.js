import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  {usersList}  from '../TemplatesTable/usersList.js';

const initialState = {
  list:[],
  loading: false,
  error: false

  }

const users = usersList
  function delayFunction (data, time = 200){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data);
        },time)
    })
  }

  export const fetchAsyncUsers = createAsyncThunk(
    'room/delayFunction',
      async (data) => {
        return await delayFunction(users)
    })


  export const usersSlice = createSlice({
    name:'users',
    initialState,
    extraReducers: {
      [fetchAsyncUsers.pending]: (state,action) => {
        console.log("Loading...");
        state.loading = true;
        state.error = false;
      },
      [fetchAsyncUsers.fulfilled]: (state, action) => {
        console.log("Load completed");
        state.list = action.payload;
        state.loading = false;
        state.error = false;
      },
      [fetchAsyncUsers.rejected]: (state, action) => {
        console.log("Failure while fetching data!");
        state.loading = false;
        state.error = true;
      },
    },
  })

export const selectUsers = (state) => state.users.list;

export default usersSlice.reducer