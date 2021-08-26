import {SET_USER_AUTHENTICATION, RESET_USER_AUTHENTICATED, GET_LOGGED_USER} from '../../constants/constantActions'
import {getUserLocalStorage, removeUserLocalStorage, setUserLocalStorage} from "../../../utils/auth/auth";

const defaultState = {
    id: null,
    name: null,
    token: null,
    isLoggedIn: false
}
const userInfo = getUserLocalStorage();
const initialState = userInfo === {} ? JSON.parse(userInfo) : defaultState

export default function authenticationReducer(state = initialState, action){
    switch(action.type) {
        case SET_USER_AUTHENTICATION :
            setUserLocalStorage(action.payload);
            return {...action.payload}
        case GET_LOGGED_USER :
            return action.payload ? {...action.payload} : state;
        case RESET_USER_AUTHENTICATED :
            removeUserLocalStorage();
            return defaultState;
        default:
            return state
    }
}
