import axios from "axios";
import {environment} from "../environments/environment";
import {getToken} from "../../utilities/auth/auth";

const instance =  axios.create({
	baseURL: environment.BASE_URL,
	timeout: 30000,
	headers: {'Authorization': getAuthorization() }
});

function getAuthorization() {
	return 'Bearer ' + getToken();
}

export default instance;