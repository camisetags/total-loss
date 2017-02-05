import React, { Component } from 'react';
import * as Actions from '../../actions/deckActions';
import Deck from './deck';
import { connect } from 'react-redux';

class SelectDeck extends Component {
		
	componentWillMount() {
		this.props.fetchDecks();
	}

	render() {
		return (
			<div className="row">
				{this.props.decks.map((deck) => {
					return <Deck description={deck.description} title={deck.title} />
				})}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		decks: state.decks
	}
}

export default connect(mapStateToProps, Actions)(SelectDeck);