import { configureStore } from '@reduxjs/toolkit';
import  userDetailsReducer from '../features/userDetails';

export default configureStore({
    reducer:{
        user:userDetailsReducer
    }
})