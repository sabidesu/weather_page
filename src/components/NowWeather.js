import React, {useEffect, useState} from 'react';

const NowWeather = props => {
	const [weatherData, setWeatherData] = useState();
	let current, high, low = null;

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.location.lat}&lon=${props.location.lon}&exclude=minutely,alerts&units=imperial&appid=${process.env.REACT_APP_api_key}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				props.saveWeather(data);
				setWeatherData(data);
			});
	}, [props.location]);

	if (weatherData) {
		current = Math.round(weatherData.current.temp);
		high = Math.round(weatherData.daily[0].temp.max);
		low = Math.round(weatherData.daily[0].temp.min);
	}

	return (
		<>
			<p>{weatherData ? current : null}</p>
		</>
	);
};

export default NowWeather;