import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const NowWeather = props => {
	const [weatherData, setWeatherData] = useState();
	let current, high, low, icon = null;

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
		const current_temp = Math.round(weatherData.current.temp);
		const high_temp = Math.round(weatherData.daily[0].temp.max);
		const low_temp = Math.round(weatherData.daily[0].temp.min);
		const icon_src = `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`

		current = (
			<>
				<Typography variant="overline">current</Typography>
				<Typography variant="h5">{current_temp}</Typography>
			</>
		)

		high = (
			<>
				<Typography variant="overline">high</Typography>
				<Typography variant="h5">{high_temp}</Typography>
			</>
		)

		low = (
			<>
				<Typography variant="overline">low</Typography>
				<Typography variant="h5">{low_temp}</Typography>
			</>
		)

		icon = (
			<img src={icon_src} alt={weatherData.current.weather[0].description} />
		)
	}

	return (
		<>
			<Typography variant="h4">now</Typography>
		 	<Grid container spacing={2} justifyContent="center">
			 	<Grid item xs={2}>
					{icon}
				</Grid>
				<Grid item xs={2}>
					{current}
				</Grid>
				<Grid item xs={2}>
					{high}
				</Grid>
				<Grid item xs={2}>
					{low}
				</Grid>
			</Grid>
		</>
	);
};

export default NowWeather;