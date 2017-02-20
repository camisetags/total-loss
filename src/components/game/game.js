import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/gameActions';
import Loading from '../loading';

// import beerImg from './beer.jpg';

class Game extends Component {

	componentWillMount() {
		console.log('Props from Game compoenent ', this.props);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Props loaded ', this.props);
	}

	render() {
		return (
			<div className="row">
				{ typeof this.props.game.deck === 'undefined' ? ( 
					<Loading />
				) : (
					<div className="col s1 l12">
						<div className="card blue-grey">
							<div className="card-content white-text">
								<span className="card-title">{ this.props.game.deck.title }</span>
								<p>{ this.props.game.deck.cards[0].challenge }</p>
								<p>{ this.props.game.deck.cards[0].challengeResult }</p>
							</div>
							<div className="card-action">
								<a href="#">Aceitar +{ this.props.game.deck.cards[0].accept }</a>
								<a href="#">Passar { this.props.game.deck.cards[0].pass }</a>
								<a href="#">Tomar 2 shots +{ this.props.game.deck.cards[0].drink }</a>
							</div>
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