import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  {usersList}  from '../TemplatesTable/usersList.js';
import { delayFunction, requestGET } from './helpers/delayFunction.js';
const url = process.env.REACT_APP_URL
const initialState = {
  list:[],
  loading: false,
  error: false

  }

// const users = usersList

  export const fetchAllUsers = createAsyncThunk(
    'users/requestGET',
      async (data) => {
        // return await delayFunction(users)
        return await requestGET(`${url}/users`,"GET")
    })
    export const getSingleUser = createAsyncThunk(
      'users/getSinlgeUser',
        async (id) => {
          return id
      })
      export const deleteUser = createAsyncThunk(
        'users/deleteUser',
        async (id) => {
          return await requestGET(`${url}/rooms/${id}`,"DELETE")
        })
      export const addUser = createAsyncThunk(
        'users/addUser',
        async (newUser) => {
          return await requestGET(`${url}/users`,"POST", newUser)
        })
          
      export const editUser = createAsyncThunk(
      'users/editUser',
        async (user) => {
          return user
      })

  export const usersSlice = createSlice({
    name:'users',
    initialState,
    extraReducers(builder) {
      builder
        .addCase (fetchAllUsers.pending, (state,action) =>{
          console.log('loading');
          state.status = 'loading'
        })
        .addCase(fetchAllUsers.fulfilled, (state, action) =>{
          console.log('load complete');
          state.status = 'succeeded'
          state.list = action.payload
        })
        .addCase(fetchAllUsers.rejected, (state,action) =>{
          console.log('Failure while fetching data!');
          state.status = 'failed'
          state.error = action.error.message
        })
        builder
          .addCase(getSingleUser.fulfilled, (state, action) =>{
            state.singleBooking= state.list.find(booking => booking.id === action.payload)
          })
         
        builder
        .addCase (deleteUser.pending, (state) =>{
          console.log('loading');
          state.status = 'loading'
        })
          .addCase(deleteUser.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.list = state.list.filter(user => Number(user.id) !== Number(action.payload))
            console.log(action.payload);
          })
          .addCase (deleteUser.rejected, (state) =>{
            console.log('loading');
            state.status = 'failed'
          })
        builder
          .addCase(addUser.pending, (state)=>{
            state.status = "loading";
          }) 
          .addCase(addUser.fulfilled, (state,action)=>{
            state.list = [...state.list,action.payload]
            state.status = "idle";
          }) 
        builder     
          .addCase(editUser.fulfilled, (state,action)=>{
            state.list = state.list.map(user => user.id === action.payload.id ? action.payload : user)
          })
    }
    
  })

  export const selectUsers = (state) => state.users.list;

  export default usersSlice.reducer