import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object } from 'prop-types';

import { objToArray } from '../../../helpers/utils';
import { getDeckList, selectDeck } from '../../../data/deck/actions';

import DeckSelectComponent from './component';
import Loading from '../../../components/Loading';

export class DeckSelect extends Component {
  static propTypes = {
    fetchDecks: func.isRequired,
    fetchDeck: func.isRequired,
    decks: arrayOf(object).isRequired,
  };

  componentDidMount() {
    this.props.fetchDecks();
  }

  selectDeck = (deckId) => {
    this.props.fetchDeck(deckId);
  };

  render() {
    if (this.props.decks.length === 1) {
      return <Loading />;
    }

    return <DeckSelectComponent decks={this.props.decks} selectDeck={this.selectDeck} />;
  }
}

const mapStateToProps = state => ({
  decks: objToArray(state.deck),
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(getDeckList()),
  fetchDeck: deckId => dispatch(selectDeck(deckId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelect);
