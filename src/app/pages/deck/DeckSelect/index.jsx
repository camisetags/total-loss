import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDeckList, selectDeck } from '../../../data/deck/actions';

import DeckSelectComponent from './component';
import Loading from '../../../components/Loading';

class DeckSelect extends React.Component {
  static get propTypes() {
    return {
      fetchDecks: PropTypes.func.isRequired,
      fetchDeck: PropTypes.func.isRequired,
      decks: PropTypes.arrayOf(PropTypes.object).isRequired,
      deck: PropTypes.object,
    };
  }

  componentDidMount() {
    this.props.fetchDecks();
  }

  selectDeck(deckId) {
    this.props.fetchDeck(deckId);
  }

  render() {
    if (this.props.decks.length === 1) {
      return <Loading />;
    }

    return <DeckSelectComponent {...this.props} selectDeck={deckId => this.selectDeck(deckId)} />;
  }
}

const mapStateToProps = state => ({
  decks: state.deck.list,
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(getDeckList()),
  fetchDeck: deckId => dispatch(selectDeck(deckId)),
});

DeckSelect.defaultProps = {
  deck: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelect);
