import React, {useState} from 'react';
import SearchPane from './SearchPane.js';
import NowWeather from './NowWeather.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
				setCoords({'lat': data[0].lat, 'lon': data[0].lon});
			})
	};

	return (
		<>
			<SearchPane handleChange={changeLocation} search={getCoords} />
			<Box sx={{flexGrow: 1}}>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						{coords ? <NowWeather location={coords} /> : null}
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default WeatherApp;