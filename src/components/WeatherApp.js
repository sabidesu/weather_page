import React, {useState} from 'react';
import Search from './Search.js';

const WeatherApp = props => {
	const [location, setLocation] = useState();
	const [coords, setCoords] = useState();

	const changeLocation = event => {
		setLocation(event.target.value);
	};

	const getCoords = () => {
		fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_api_key}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setCoords(data);
			})
	};

	return (
		<>
			<Search handleChange={changeLocation} search={getCoords}/>
			<p>{location}</p>
		</>
	);
};

export default WeatherApp;