// @flow
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import type { Connector } from 'react-redux';
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
    selectedDeck: state.deck.selected,
    deckList: state.deck.list,
  });

  return connect(mapStateToProps)(Filter);
};

export default DeckFilter;
