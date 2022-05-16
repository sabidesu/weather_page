import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const DailyForecast = props => {
	return (
		<>
			<Typography variant="h4">daily</Typography>
			<Grid container spacing={1}>
				{props.weather.slice(1).map((weatherInfo) => {
					return (
						<Grid item xs={1} key={weatherInfo.dt}>
							<Day weather={weatherInfo}/>
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
	const icon_src = `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}.png`

	return (
		<>
			<Typography variant="h6">{short}</Typography>
			<img src={icon_src} alt={props.weather.weather[0].description} />
			<Typography variant="body1">{Math.round(props.weather.temp.max)}</Typography>
			<Typography variant="body1">{Math.round(props.weather.temp.min)}</Typography>
		</>
	);
}

export default DailyForecast;