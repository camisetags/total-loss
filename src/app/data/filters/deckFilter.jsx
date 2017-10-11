/* eslint no-console: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const DeckFilter = (NextComponent) => {
  const Filter = (props) => {
    if (props.deckList.length <= 1 && props.selectedDeck.cards.length === 0) {
      return <Redirect to="deck-select" />;
    }

    return <NextComponent {...props} />;
  };

  Filter.propTypes = {
    deckList: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedDeck: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  };

  const mapStateToProps = state => ({
    selectedDeck: state.deck.selected,
    deckList: state.deck.list,
  });

  return connect(mapStateToProps)(Filter);
};

export default DeckFilter;
