const keyUser = 'USER_INFO';

export function setUserLocalStorage(value) {
	localStorage.setItem(keyUser, JSON.stringify(value));
}

export function getUserLocalStorage() {
	return JSON.parse(localStorage.getItem(keyUser) || '{}');
}

export function getToken() {
	let user =  getUserLocalStorage();
	return user['token'];
}

export function removeUserLocalStorage() {
	localStorage.removeItem(keyUser);
}

