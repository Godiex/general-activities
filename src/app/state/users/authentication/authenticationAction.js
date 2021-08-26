import * as constants from '../../constants/constantActions';
import axios from "../../../api/config";
import {createAction} from "@reduxjs/toolkit";
import {getUserLocalStorage} from "../../../utils/auth/auth";

export const setUserAuth = createAction(constants.SET_USER_AUTHENTICATION);
export const setLoggedUser = createAction(constants.GET_LOGGED_USER);
export const comingOut = createAction(constants.RESET_USER_AUTHENTICATED);

export const login = (data, postProcessSuccess, postProcessError) => async (dispatch) => {
    try {
        let response = await axios.post('login',data);
        let user = setUserInfo(response.data);
        dispatch(setUserAuth(user));
        postProcessSuccess(user);
    } catch (e) {
        console.log(e);
        postProcessError(e.response);
    }
}

export const logOut = () => (dispatch) => {
    dispatch(comingOut());
}

export const getLoggedUser = () =>  (dispatch) => {
    let user = getUserLocalStorage();
    dispatch(setLoggedUser(user));
}

const setUserInfo = (data) => {
    if (data._payload) {
        const userParsedToken = JSON.parse(atob(data._payload.split(".")[1]));
        return {
            id: userParsedToken.user.id,
            name: userParsedToken.user.name,
            token: data._payload,
            isLoggedIn: true,
        };
    }
};
