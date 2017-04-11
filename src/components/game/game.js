import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/gameActions';
import Loading from '../loading';
import GameCard from './gameCard';
import UserScore from './userScore';
import BaseComponent from '../baseComponent';

class Game extends BaseComponent {

	componentDidUpdate(prevProps, prevState) {
		if (this.props.game.isWinner) {
			window.location.hash = `/game-over/${this.props.game.name}`;
		}
	}

	addPoint(amountToAdd) {
		this.handleVibrate();
		this.props.addPoint(
			amountToAdd
		)
	}

	render() {
		return (
			<div>	
				{ typeof this.props.game.deck === 'undefined' ? ( 
						<Loading />
				) : (
					<div>
						<div className="row">
							{this.props.game.users.map((user, index) => {
								return <UserScore key={index} user={user} />;
							})}
						</div>
						<div className="row">
							<GameCard 
								game={this.props.game}
								cardIndex={this.props.game.cardIndex}
								addPoint={(amountToAdd) => this.addPoint(amountToAdd)} />
						</div>				
					</div>
				) }
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
