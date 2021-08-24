import axios from "axios";

import * as constants from "./constants";
import { logoutUser } from "./actions/Configuration/authAction";

export const apiMiddleware =
	({ dispatch, getState }) =>
		(next) =>
			(action) => {
				if (action.type !== constants.API) return next(action);
				
				// dispatch({ type: constants.TOGGLE_LOADER });
				//const BASE_URL = 'http://127.0.0.1:8000';
				const BASE_URL = constants.RUTA_API;
				const AUTH_TOKEN = getState().user.token;
				if (AUTH_TOKEN)
					axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
				const { url, method, success, data, postProcessSuccess, postProcessError } =
					action.payload;
				
				if (method) {
					axios({
						method,
						url: BASE_URL + url,
						data: data ? data : null,
					})
						.then((response) => {
							//dispatch({ type: constants.TOGGLE_LOADER });
							if (success) dispatch(success(response.data));
							if (postProcessSuccess) postProcessSuccess(response.data);
						})
						.catch((err) => {
							//dispatch({ type: constants.TOGGLE_LOADER })
							
							validateToken(err, dispatch);
							
							if (!err.response) console.warn(err);
							else {
								if (err.response && err.response.status === 403)
									dispatch(logoutUser());
								if (err.response.data.error) {
									if (postProcessError) postProcessError(err.response.data);
								}
							}
						});
				} else {
					dispatch(success());
				}
			};

			function validateToken(err, dispatch) {
				if (typeof err.response !== "undefined") {
					if (err.response.hasOwnProperty("data")) {
						const { data } = err.response;
						if (data.message === "Token has expired") {
							dispatch(logoutUser());
						}
					}
				}
			}
