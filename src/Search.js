import React, {useState} from 'react';

const Search = (props) => {
	const [location, setLocation] = useState();

	const changeLocation = event => {
		setLocation(event.target.value);
	}

	return (
		<>
			<p>insert your location below</p>
			<input type="text" id="location" name="location" onChange={changeLocation} />
			<button>go</button>

			<p>{location}</p>
		</>
	);
};

export default Search;