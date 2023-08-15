import axios from 'axios'

export async function fetchArticles() {
	try {
		const body = {
			username: 'user',
			password : 'user'
		}

		let accessToken
		await axios.post('http://localhost:3000/api/login', body)
			.then(res => accessToken= res.data.token)

		const headers = {
			Authorization: `${accessToken}`,
		};

		const response = await axios.get('http://localhost:3000/api/article', {headers})
		return response.data.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function fetchWeather() {
	try {
		const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Tallard&appid=e89add10c9fad11ffe243dc52a467505&lang=fr&cnt=5&units=metric')
		console.log(response.data)
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
