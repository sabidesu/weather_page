import React from 'react';

const InfoPane = props => {
	return (
		<>
			<p>{JSON.stringify(props.location)}</p>
		</>
	);
};

export default InfoPane;