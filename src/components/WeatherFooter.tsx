import React, { useEffect, useState } from 'react'
import { fetchWeather } from '../utils/getData'

type WeatherList = {
	weather: [{
		icon: string
		description: string
	}]
	main: {
		temp: number
	}
	dt_txt: string
	dt: string
}

type Weather = {
	name: string
	list: WeatherList[]
}

export const WeatherFooter = () => {

	const [weather, setWeather] = useState<Weather>({
		name: "",
		list:[{
			weather: [{
				icon:"01d",
				description: ""}],
			main: {
				temp: 0
			},
			dt_txt: "",
			dt: ""
		}]
	});

	useEffect(() => {
		fetchWeather()
			.then((data) => {
				console.log(data)
				setWeather({ ...weather, name: data.city.name, list: data.list })
			})
			.catch((error) => console.error(error));
	}, []);

	let list: WeatherList[]  = []

	for (let i = 0; i< weather.list.length; i++){
		i%2 == 0 ? list.push(weather.list[i]) : false
	}

	return (
		<div>
			<h5 className="bg-[#C7D8F2] pt-5 text-[#496293] text-4xl font-bold text-center ">{weather.name}</h5>
			<div className="flex flex-row justify-around bg-[#C7D8F2] py-5">
				{
						list.map(day => (
							<div key={day.dt} className="bg-blue-100 p-2 rounded-lg" >
								<div id='icon'><img id='wicon' src={'http://openweathermap.org/img/w/' + day.weather[0].icon +'.png'}
						                    alt='Weather icon' /></div>
								<p>{day.main.temp} °C</p>
								<p>{day.weather[0].description}</p>
								<p>{day.dt_txt}</p>
							</div>
				))
			}
			</div>
		</div>
	)
};