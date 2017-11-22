import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect, InferableComponentEnhancerWithProps } from 'react-redux';
import { RootState } from '../data/types';
import { Deck } from '../data/deck/types';

export type FilterProps = {
  decks: Deck[];
};

const DeckFilter = (NextComponent: React.ReactType) => {
  const Filter = (props: FilterProps) => {
    if (props.decks.length <= 1) {
      return <Redirect to="deck-select" />;
    }

    return <NextComponent {...props} />;
  };

  const mapStateToProps = (state: RootState) => ({
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
