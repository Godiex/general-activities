import {GET_ACTIVE_USER} from "../../constants";

export const fetchAllActivatedUsers = () => ({
	type: constants.API,
	payload: {
		method: 'GET',
		url: `${constants.RUTA}/user/fetch_users_activated`,
		success: (response) => (allActivateUsers(response))
	}
});

const allActivateUsers = (data) => ({
	type: GET_ACTIVE_USER,
	payload: data
});

