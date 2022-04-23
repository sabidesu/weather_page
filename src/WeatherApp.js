import React, {useState} from 'react';
import Search from './Search.js';

const WeatherApp = props => {
	const [location, setLocation] = useState();

	const changeLocation = event => {
		setLocation(event.target.value);
	};

	return (
		<>
			<Search handleChange={changeLocation}/>
			<p>{location}</p>
		</>
	);
};

export default WeatherApp;