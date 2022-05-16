import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const HourlyForecast = props => {
	return (
		<>
			<Typography variant="h4">tomorrow</Typography>
			{props.weather.filter(hour => {
				const time = new Date(hour.dt * 1000);
				return time.getDate() !== new Date(Date.now()).getDate();
			})
				.slice(8, 21)
				.map((weatherInfo) => <Hour weather={weatherInfo} key={weatherInfo.dt}/>)}
		</>
	);
}

const Hour = props => {
	const date = new Date(props.weather.dt * 1000);
	const time = date.getHours() + ":00";
	const icon_src = `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}.png`

	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs={3}>

				</Grid>
				<Grid item xs={2}>
					<Typography variant="h6">{time}</Typography>
				</Grid>
				<Grid item xs={2}>
					<img src={icon_src} alt={props.weather.weather[0].description} />
				</Grid>
				<Grid item xs={2}>
					<Typography variant="body1">{Math.round(props.weather.temp)}</Typography>
				</Grid>
				<Grid item xs={3}>

				</Grid>
			</Grid>
		</>
	);
}

export default HourlyForecast;