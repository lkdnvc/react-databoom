import React from 'react';

import CarList from './car-list';

class Manager extends React.Component {
	render() {
		return (
			<div className="limiter wrapper">
				<CarList/>
			</div>
		);
	}
}

export default Manager;
