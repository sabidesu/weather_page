import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchPane = props => {
	return (
		<>
			<p>insert your location below</p>
			<TextField id='location' label='Location' variant='standard' onChange={props.handleChange} />
			<Button variant='outlined' onClick={props.search}>GO</Button>
		</>
	);
};

export default SearchPane;