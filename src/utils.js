import axios from 'axios'

export const authenticate = (path,data,callback) => {
	axios.post(path, data)
		.then(function (response) {
			window.sessionStorage.setItem("token", "Bearer "+ response.data.token);
			window.sessionStorage.setItem("user_id", response.data.user_id);
			callback(true);
			console.log(response + "callback true");
		})
		.catch(function (error) {
			callback(false);
			
			console.log(error);
		});
}