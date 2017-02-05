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

function mapStateToProps(state) {
	return {
		users: state.users,
		decks: state.decks
	};
};

export default connect(mapStateToProps)(App);
