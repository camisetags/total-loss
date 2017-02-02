import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div className="container">
				{this.props.children}
			</div>
		);
	}
}

function mainState(state) {
	return {
		users: state,
		cards: state
	};
}

export default connect(mainState)(App);
