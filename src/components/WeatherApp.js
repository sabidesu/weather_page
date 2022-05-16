import React, {useState} from 'react';

import SearchPane from './SearchPane.js';
import NowWeather from './NowWeather.js';
import DailyForecast from './DailyForecast.js';
import HourlyForecast from './HourlyForecast.js';
import News from './News.js';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const WeatherApp = props => {
	const [location, setLocation] = useState();
	const [coords, setCoords] = useState();
	const [weather, setWeather] = useState();

	const changeLocation = event => {
		setLocation(event.target.value);
	};

	const getCoords = () => {
		fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_api_key}`)
			.then(response => response.json())
			.then(data => {
				setCoords({'lat': data[0].lat, 'lon': data[0].lon});
			});
	};

	const saveWeather = (data) => {
		setWeather(data);
	}

	return (
		<>
			<SearchPane handleChange={changeLocation} search={getCoords} />
			<Box sx={{flexGrow: 1}}>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						{coords ? <NowWeather location={coords} saveWeather={saveWeather} /> : null}
					</Grid>
					<Grid item xs={8}>
						{weather ? <DailyForecast weather={weather.daily} /> : null}
					</Grid>
					<Grid item xs={4}>
						{weather ? <HourlyForecast weather={weather.hourly} /> : null}
					</Grid>
					<Grid item xs={8}>
						<News />
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default WeatherApp;