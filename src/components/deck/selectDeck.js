import React, { Component } from 'react';
import * as Actions from '../../actions/deckActions';
import Deck from './deck';
import { connect } from 'react-redux';

class SelectDeck extends Component {
		
	componentWillMount() {
		this.props.fetchDecks();
	}

	deckLoading() {
		return (
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
		);
	}

	renderDecks() {
		if (typeof this.props.decks === 'undefined') {
			return this.deckLoading();
		} else {
			return this.props.decks.map((deck, index) => {
				return <Deck key={index} description={deck.description} title={deck.title} />
			});
		}
	}

	render() {
		return (
			<div className="row">
				{this.renderDecks()}
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