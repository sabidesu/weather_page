import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const DailyForecast = props => {
	console.log(props.weather.daily);
	return (
		<>
			<Typography variant="h4">daily</Typography>
			<Grid container spacing={1}>
				{props.weather.daily.slice(1).map((weatherInfo) => {
					return (
						<Grid item xs={1}>
							<Day weather={weatherInfo} key={weatherInfo.dt}/>
						</Grid>
					)
				})}
			</Grid>
		</>
	);
};

const Day = props => {
	const date = new Date(props.weather.dt * 1000); // js counts ms since epoch, not s 
	const short = date.getMonth() + "/" + date.getDate();

	return (
		<>
			<Typography variant="h6">{short}</Typography>
			<Typography variant="body1">{Math.round(props.weather.temp.max)}</Typography>
			<Typography variant="body1">{Math.round(props.weather.temp.min)}</Typography>
		</>
	);
}

export default DailyForecast;