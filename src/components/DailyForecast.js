import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const DailyForecast = props => {
	return (
		<>
			<Typography variant="h4">daily</Typography>
			<Grid container spacing={2}>
				<Grid item xs={2}>

				</Grid>
				<Grid item xs={2}>
					<Typography variant="overline">date</Typography>
				</Grid>
				<Grid item xs={2}>
					<Typography variant="overline">weather</Typography>
				</Grid>
				<Grid item xs={2}>
					<Typography variant="overline">high</Typography>
				</Grid>
				<Grid item xs={2}>
					<Typography variant="overline">low</Typography>
				</Grid>
			</Grid>
			{props.weather.slice(1).map((weatherInfo) => {
				return (
					<Day weather={weatherInfo} key={weatherInfo.dt} />
				)
			})}
		</>
	);
};

const Day = props => {
	const date = new Date(props.weather.dt * 1000); // js counts ms since epoch, not s 
	const short = date.getMonth() + "/" + date.getDate();
	const icon_src = `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}.png`

	return (
		<>
		 	<Grid container spacing={2}>
			 	<Grid item xs={2}>

				</Grid>
			 	<Grid item xs={2}>
					<Typography variant="subtitle1">{short}</Typography>
				</Grid>
				<Grid item xs={2}>
					<img src={icon_src} alt={props.weather.weather[0].description} />
				</Grid>
				<Grid item xs={2}>
					<Typography variant="h5">{Math.round(props.weather.temp.max)}</Typography>
				</Grid>
				<Grid item xs={2}>
					<Typography variant="h5">{Math.round(props.weather.temp.min)}</Typography>
				</Grid>
			</Grid>
		</>
	);
}

export default DailyForecast;