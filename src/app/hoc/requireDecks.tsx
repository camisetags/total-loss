import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../data/types';
// import * as deckRepository from '../deck/repository';

type FilterProps = {
  decks: object[];
};

const DeckFilter = (NextComponent: React.ReactType) => {
  const Filter = (props: FilterProps) => {
    if (props.decks.length <= 1) {
      return <Redirect to="deck-select" />;
    }

    return <NextComponent {...props} />;
  };

  const mapStateToProps = (state: any) => ({
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
