import * as constants from '../constants';
import {END_GENERAL_ACTIVITY} from "../constants";
import {createAction} from "@reduxjs/toolkit/src/createAction";
import axios from "../../api/configAxios";

export const allGeneralActivity = createAction(constants.SET_ALL_GENERAL_ACTIVITY);

export const faetchAllGeneralActivity = () => ({
	type: constants.API,
	payload: {
		method: 'GET',
		url: `${constants.RUTA}/general-activity`,
		success: (response) => (setAllGeneralActivity(response))
	}
});

export const fetchAllGeneralActivity = () => async (dispatch) => {
	try {
		let response = await axios.get('general-activity');
		dispatch(allGeneralActivity(response));
	}
	catch (e) {
	
	}
}



export const createGeneralActivity = (data, onSuccess, onError) => ({
	type: constants.API,
	payload: {
		method: 'POST',
		url: `${constants.RUTA}/general-activity`,
		data,
		success: (generalActivity) => (addGeneralActivity(generalActivity)),
		postProcessSuccess: onSuccess,
		postProcessError: onError
	}
});

export const getGeneralActivityById = (generalActivityId, onSuccess) => ({
	type: constants.API,
	payload: {
		method: 'GET',
		url: `${constants.RUTA}/general-activity/${generalActivityId}`,
		postProcessSuccess: onSuccess
	}
});

export const updateGeneralActivityById = (generalActivityId, data, onSuccess, onError) => ({
	type: constants.API,
	payload: {
		method: 'PUT',
		url: `${constants.RUTA}/general-activity/${generalActivityId}`,
		data,
		success: (data) => (updateGeneralActivity(generalActivityId, data)),
		postProcessSuccess: onSuccess,
		postProcessError: onError
	}
});

export const endActivity = (generalActivityId, data, onSuccess, onError) => ({
	type: constants.API,
	payload: {
		method: 'PUT',
		url: `${constants.RUTA}/general-activity/end-activity/${generalActivityId}`,
		data,
		success: (data) => (endedActivity(generalActivityId, data)),
		postProcessSuccess: onSuccess,
		postProcessError: onError
	}
});

export const deleteGeneralActivityById = (generalActivityId, onSuccess, onError) => ({
	type: constants.API,
	payload: {
		method: 'DELETE',
		url: `${constants.RUTA}/general-activity/${generalActivityId}`,
		success: (generalActivityId) => (removeGeneralActivity(generalActivityId)),
		postProcessSuccess: onSuccess,
		postProcessError: onError
	}
});

const setAllGeneralActivity = (data) => ({
	type: constants.SET_ALL_GENERAL_ACTIVITY,
	payload: data
});

const addGeneralActivity = (generalActivity) => ({
	type: constants.ADD_GENERAL_ACTIVITY,
	payload: generalActivity
});

const endedActivity = (generalActivityId, data) => ({
	type: constants.END_GENERAL_ACTIVITY,
	payload: data
});

const updateGeneralActivity = (generalActivityId, data) => ({
	type: constants.UPDATE_GENERAL_ACTIVITY,
	payload: data
});

const removeGeneralActivity = (generalActivityId) => ({
	type: constants.REMOVE_GENERAL_ACTIVITY,
	payload: generalActivityId
});