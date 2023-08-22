import axios from 'axios'

const baseURL: string = "http://localhost:3000/api/"

// Cette fonction asynchrone est exportée pour pouvoir être utilisée ailleurs dans le code.
export async function fetchData(url: string, typeRequest: "GET"|"POST"|"PUT", body:{} ) {
	try {
		// Création de l'objet 'body' avec les informations d'identification de l'utilisateur.
		const body = {
			username: 'user',
			password: 'user'
		}

		// Déclaration de la variable 'accessToken'.
		let accessToken;

		// Effectue une requête POST pour se connecter et obtenir un jeton d'accès.
		await axios.post(baseURL+'login', body)
			.then(res => accessToken = res.data.token);

		// Création des en-têtes de la requête GET avec le jeton d'accès obtenu.
		const headers = {
			Authorization: `${accessToken}`,
		};

		
		switch (typeRequest){
			case "GET" : 
			// Effectue une requête GET pour récupérer la liste d'articles en utilisant les en-têtes définis.
			const responseGet = await axios.get(baseURL+url, {headers});
	
			// Retourne les données d'articles extraites de la réponse.
			//console.log(response.data.data)
			return responseGet.data.data;

			case "POST": 
			const responsePost = await axios.post(baseURL+url, body, {headers})
			return responsePost.data;

			case "PUT": 
			const responsePut = await axios.put(baseURL+url, body, {headers})
			return responsePut.data;
			
		}
		

	} catch (error) {
		// En cas d'erreur, affiche l'erreur dans la console et la propage à l'appelant.
		console.error(error);
		throw error;
	}
}


export async function fetchWeather() {
	try {
		const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Tallard&appid=e89add10c9fad11ffe243dc52a467505&lang=fr&cnt=5&units=metric')
		//console.log(response.data)
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
