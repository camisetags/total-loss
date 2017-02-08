import React, { Component } from 'react';
import * as DeckActions from '../../actions/deckActions';
import * as GameActions from '../../actions/gameActions';
import Deck from './deck';
import { connect } from 'react-redux';

class SelectDeck extends Component {
		
	componentWillMount() {
		this.props.fetchDecks();
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
					<div className="col s1 l5 offset-s5"> 
						<div className="preloader-wrapper big active">
					    <div className="spinner-layer spinner-blue-only">
					      <div className="circle-clipper left">
					        <div className="circle"></div>
					      </div>
					      <div className="gap-patch">
					        <div className="circle"></div>
					      </div>
					      <div className="circle-clipper right">
					        <div className="circle"></div>
					      </div>
					    </div>
					  </div>
					</div>
				) : (
					this.props.decks.map((deck, index) => {
						return <Deck 
							key={index} 
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

const Act = {...DeckActions, ...GameActions};

export default connect(mapStateToProps, Act)(SelectDeck);