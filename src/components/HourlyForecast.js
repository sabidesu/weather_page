import Typography from '@mui/material/Typography';

const HourlyForecast = props => {
	return (
		<>
			<Typography variant="h4">tomorrow</Typography>
			{props.weather.filter(hour => {
				const time = new Date(hour.dt * 1000);
				return time.getDate() !== new Date(Date.now()).getDate();
			})
				.slice(7, 20)
				.map((weatherInfo) => <Hour weather={weatherInfo} key={weatherInfo.dt}/>)}
		</>
	);
}

const Hour = props => {
	const date = new Date(props.weather.dt);
	const time = date.getHours() + ":" + date.getMinutes();
	return (
		<>
			<Typography variant="h6">{time}</Typography>
		</>
	);
}

export default HourlyForecast;