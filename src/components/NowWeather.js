import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
		let current_temp = Math.round(weatherData.current.temp);
		let high_temp = Math.round(weatherData.daily[0].temp.max);
		let low_temp = Math.round(weatherData.daily[0].temp.min);

		current = (
			<>
				<Typography variant="h6">current</Typography>
				<Typography variant="body1">{current_temp}</Typography>
			</>
		)

		high = (
			<>
				<Typography variant="h6">high</Typography>
				<Typography variant="body1">{high_temp}</Typography>
			</>
		)

		low = (
			<>
				<Typography variant="h6">low</Typography>
				<Typography variant="body1">{low_temp}</Typography>
			</>
		)
	}

	return (
		<>
			<Typography variant="h4">now</Typography>
		 	<Grid container spacing={2}>
			 	<Grid item xs={3}>
					
				</Grid>
				<Grid item xs={3}>
					{current}
				</Grid>
				<Grid item xs={3}>
					{high}
				</Grid>
				<Grid item xs={3}>
					{low}
				</Grid>
			</Grid>
		</>
	);
};

export default NowWeather;