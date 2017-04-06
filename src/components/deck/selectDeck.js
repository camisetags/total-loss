import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as DeckActions from '../../actions/deckActions';
import * as GameActions from '../../actions/gameActions';
import Deck from './deck';
import Loading from '../loading';


class SelectDeck extends Component {
		
	componentWillMount() {
		if (this.props.decks.length === 0) {
			this.props.fetchDecks();
		}
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Component dom updated ', this.props.decks);
	}

	handleStartGame(deckId) {
		this.props.startGame(
			deckId,
			this.props.users
		);
	}

	render() {
		return (
			<div className="row">
				{ typeof this.props.decks.map === 'undefined' ? (
					<Loading />
				) : (
					this.props.decks.map((deck, index) => {
						return <Deck 
							key={index} 
							target={index}
							title={deck.title} 
							handleStartGame={() => this.handleStartGame(deck.id)}
							description={deck.description} />
					})
				) }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		decks: state.decks,
		users: state.users
	}
}

const Act = { ...DeckActions, ...GameActions };

export default connect(mapStateToProps, Act)(SelectDeck);