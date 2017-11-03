// @flow
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import type { DeckState } from '../deck/state';
import type { RootState } from '../types';

const DeckFilter = (NextComponent: any): any => {
  const Filter = (props: DeckState): React.Element<*> => {
    if (props.list.length <= 1 && props.selected.cards.length === 0) {
      return <Redirect to="deck-select" />;
    }

    return <NextComponent {...props} />;
  };

  const mapStateToProps: Object = (state: RootState) => ({
    selected: state.deck.selected,
    list: state.deck.list,
  });

  if (process.env.NODE_ENV === 'test') {
    return Filter;
  }

  return connect(mapStateToProps)(Filter);
};

export default DeckFilter;
