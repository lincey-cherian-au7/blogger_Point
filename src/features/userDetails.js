import {createSlice } from '@reduxjs/toolkit';

const userDetails = createSlice({
    name:"user",
    initialState: {
        isLoggedIn:false,
        userInfo :null,
        searchInput : 'tech',
        blogData:null,
    },
    reducers:{
        setLoggedIn:(state,action)=>{
            state.isLoggedIn =action.payload;
        },
        setUserInfo:(state ,action)=>{ 
            state.userInfo = action.payload
        },
        setInput:(state,action)=>{
            state.searchInput=action.payload
        },
        setBlogData:(state,action)=>{
            state.blogData=action.payload
        }
    }
})

export const {setLoggedIn,
    setUserInfo,
    setInput,
    setBlogData}= userDetails.actions

export const selectSignedIn =(state) => state.user.setLoggedIn
export const selectUserInfo =(state) => state.user.setUserInfo
export const selectUserInput =(state) => state.user.setInput
export const selectBlogData =(state) => state.user.setBlogData

export default userDetails.reducers;
