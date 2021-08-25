import { configureStore } from '@reduxjs/toolkit';
import user from '../users/user/userReducer';
import userAuth from '../users/authentication/authenticationReducer';

const ConfigStore = configureStore({
    reducer : {
        user,
        userAuth
    }
})

export default ConfigStore;
