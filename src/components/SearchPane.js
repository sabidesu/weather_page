import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SearchPane = props => {
	return (
		<>
			<Typography variant="body1">insert your location below</Typography>
			<TextField id='location' label='Location' variant='standard' onChange={props.handleChange} />
			<Button variant='outlined' onClick={props.search}>GO</Button>
		</>
	);
};

export default SearchPane;