import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { object, arrayOf } from 'prop-types';
// import * as deckRepository from '../deck/repository';

const DeckFilter = (NextComponent) => {
  const Filter = (props) => {
    if (props.decks.length <= 1) {
      return <Redirect to="deck-select" />;
    }

    return <NextComponent {...props} />;
  };

  Filter.propTypes = {
    decks: arrayOf(object).isRequired,
  };

  const mapStateToProps = state => ({
    decks: Object.values(state.deck),
  });

  /* istanbul ignore next */
  if (process.env.NODE_ENV === 'test') {
    return Filter;
  }

  /* istanbul ignore next */
  return connect(mapStateToProps)(Filter);
};

export default DeckFilter;
