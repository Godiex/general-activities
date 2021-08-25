import {SET_USER_AUTHENTICATION, RESET_USER_AUTHENTICATED} from '../../constants'

const defaultState = {
    userId: null,
    email: null,
    token: null,
    isLoggedIn: false
}
const userInfo = localStorage.getItem('USER_INFO')
const INITIAL_STATE = userInfo ? JSON.parse(userInfo) : defaultState

export default function authenticationReducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case SET_USER_AUTHENTICATION :
            return { ...action.payload}
        case RESET_USER_AUTHENTICATED :
            return defaultState 
        default:
            return state
    }
}
