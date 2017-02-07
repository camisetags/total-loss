import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/gameActions';

class Game extends Component {

	componentWillMount() {
		this.props.startGame(
			this.props.users,
			this.props.location.query.userId
		);
	}

	render() {
		return (
			<div className="card">
				<h1>Game Page</h1>
				{ this.props.game.users }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		game: state.game,
		users: state.users,
		deck: state.deck
	};
}

export default connect(mapStateToProps, Actions)(Game);