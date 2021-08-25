import { configureStore } from '@reduxjs/toolkit';
import user from './users/user/userReducer';
import userAuth from './users/authentication/authenticationReducer';

const store = configureStore({
    reducer : {
        user,
        userAuth
    }
})

export default store;
