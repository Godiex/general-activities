    import { GET_ACTIVE_USER } from "../../constants/constantActions";

    export default function usersReducer(state = [], action) {
        switch (action.type) {
        case GET_ACTIVE_USER:
            return action.payload;
        default:
            return state;
        }
    }
