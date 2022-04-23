import React from 'react';

const Search = props => {
	return (
		<>
			<p>insert your location below</p>
			<input type="text" id="location" name="location" onChange={props.handleChange} />
			<button onClick={props.search}>go</button>
		</>
	);
};

export default Search;