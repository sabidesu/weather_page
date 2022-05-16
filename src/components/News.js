import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const News = props => {
	return (
		<>
			<Typography variant="h4">yesterday's top news</Typography>
			{props.news.results.slice(0, 5).map((info) => <Article info={info} key={info.abstract} />)}
		</>
	);
};

const Article = props => {
	const hasImage = props.info.media.length !== 0;
	return (
		<>
			<Grid container padding={2} alignItems="center">
				{hasImage ? 
				<Grid item xs={4}>
					<img src={props.info.media[0]["media-metadata"][1].url} alt={props.info.media[0].copyright} /> 
				</Grid>
				: null}
				<Grid item xs={hasImage ? 8 : 12}>
					<Typography variant="h6" align="left">{props.info.title}</Typography>
					<Typography variant="subtitle1" align="left">{props.info.byline}</Typography>
					<Typography variant="body1" align="left">{props.info.abstract}</Typography>
					<Button variant="text" href={props.info.url}>Read More</Button>
				</Grid>
			</Grid>
		</>
	);	
}

export default News;