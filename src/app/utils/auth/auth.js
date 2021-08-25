 function getUSerLocalStorage() {
	return JSON.parse(localStorage.getItem('USER_INFO'));
}

export function getToken() {
	let user =  getUSerLocalStorage();
	return user['token'];
}