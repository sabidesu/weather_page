import React, {useEffect, useState} from 'react';

import SearchPane from './SearchPane.js';
import NowWeather from './NowWeather.js';
import DailyForecast from './DailyForecast.js';
import HourlyForecast from './HourlyForecast.js';
import News from './News.js';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const WeatherApp = props => {
	const [location, setLocation] = useState();
	const [coords, setCoords] = useState();
	const [weather, setWeather] = useState();
	const [news, setNews] = useState();

	const changeLocation = event => setLocation(event.target.value);

	const getCoords = () => {
		fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_api_key}`)
			.then(response => response.json())
			.then(data => {
				setCoords({'lat': data[0].lat, 'lon': data[0].lon});
			});
	};

	const saveWeather = data => setWeather(data);

	useEffect(() => {
		fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_nyt_key}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setNews(data);
			});
	}, [location]);
		
	return (
		<>
			<SearchPane handleChange={changeLocation} search={getCoords} />
			<Box sx={{flexGrow: 1}}>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						{coords ? 
						<Paper elevation={4}>
							<NowWeather location={coords} saveWeather={saveWeather} /> 
						</Paper> 
						: null}
					</Grid>
					<Grid item xs={8}>
						{weather ? 
						<Paper elevation={4}>
							<DailyForecast weather={weather.daily} /> 
						</Paper>
						: null}
					</Grid>
					<Grid item xs={4}>
						{weather ? 
						<Paper elevation={4}>
							<HourlyForecast weather={weather.hourly} /> 
						</Paper>
						: null}
					</Grid>
					<Grid item xs={8}>
						{news ? 
						<Paper elevation={4}>
							<News news={news} /> 
						</Paper>
						: null}
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default WeatherApp;