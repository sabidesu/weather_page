import React, {useEffect, useState} from 'react';

const NowWeather = props => {
	const [weatherData, setWeatherData] = useState();

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.location.lat}&lon=${props.location.lon}&exclude=minutely,alerts&appid=${process.env.REACT_APP_api_key}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setWeatherData(data);
			});
	}, [props.location]);

	return (
		<>
			<p>{JSON.stringify(props.location)}</p>
		</>
	);
};

export default NowWeather;