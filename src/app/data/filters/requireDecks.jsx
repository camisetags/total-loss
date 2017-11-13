import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { object, arrayOf, shape } from 'prop-types';

const DeckFilter = (NextComponent) => {
  const Filter = (props) => {
    if (props.list.length <= 1 && props.selected.cards.length === 0) {
      return <Redirect to="deck-select" />;
    }

    return <NextComponent {...props} />;
  };

  Filter.propTypes = {
    selected: shape({
      cards: arrayOf(object).isRequired,
    }).isRequired,
    list: arrayOf(object).isRequired,
  };

  const mapStateToProps = state => ({
    selected: state.deck.selected,
    list: state.deck.list,
  });

  /* istanbul ignore next */
  if (process.env.NODE_ENV === 'test') {
    return Filter;
  }

  /* istanbul ignore next */
  return connect(mapStateToProps)(Filter);
};

export default DeckFilter;
