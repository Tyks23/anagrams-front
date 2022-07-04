import axios from 'axios'

export const authenticate = (path,data,callback) => {
	axios.post(path, data)
		.then(function (response) {
			window.sessionStorage.setItem("token", "Bearer "+ response.data.token);
			callback(true);
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}