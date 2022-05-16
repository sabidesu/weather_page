import { responsiveProperty } from '@mui/material/styles/cssUtils';
import Typography from '@mui/material/Typography';
import React, {useEffect, useState} from 'react';

const News = props => {
	const [news, setNews] = useState();

	fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_nyt_key}`)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			setNews(data);
		});

	return (
		<>
			<Typography variant="h4">yesterday's top news</Typography>
		</>
	);
};

export default News;