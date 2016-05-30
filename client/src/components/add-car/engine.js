import React from 'react';
import { Link } from 'react-router'

class Engine extends React.Component {
	render() {
		return (
			<div className="engine">
				<h1 class="app-title">Engine</h1>

				<div className="nav-buttons">
					<Link to="/add-car/tires-and-brakes" className="custom-btn">Назад</Link>
					<Link to="/add-car/suspension" className="custom-btn">Далее</Link>
				</div>
			</div>
		);
	}
}

export default Engine;
