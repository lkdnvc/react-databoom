import React from 'react';
import { Link } from 'react-router'


//assets
require('normalize.css/normalize.css');
require('styles/app.scss');

class App extends React.Component {
	render() {
		return (
			<section className="app">
				<header className="header">
					<Link to='/' className="header__logo">
            <p className="header__logo--grey">Auto</p>
            <p>Gross</p>
          </Link>
					<nav className="menu">
						<Link to='/auction' className="item" activeClassName="active">auction</Link>
						<Link to='/add-car' className="item" activeClassName="active">add-car</Link>
						<Link to='/login' className="item" activeClassName="active">login</Link>
					</nav>
				</header>
				<div className="content-wrapper">
					{this.props.children }
				</div>
			</section>
		);
	}
}

App.defaultProps = {};

export default App;
