import React from 'react';
import UsersList from './Data';

import {createSlice} from '@reduxjs/toolkit';
const userSlice=createSlice(
    {
        name:"users",
        initialState:" ",
    
    reducers:{
        addUser:(state,action)=>{
            console.log(action)
            state.push(action.payload)
        }
    }
}
)
export const{addUser}=userSlice.actions;
export default userSlice.reducer;