// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getDeckList, selectDeck } from '../../../data/deck/actions';

import DeckSelectComponent from './component';
import Loading from '../../../components/Loading';
import type { Deck } from '../../../data/deck/state';
import type { RootState } from '../../../data/types';

type DeckSelectProps = {
  fetchDecks: Function,
  fetchDeck: Function,
  decks: Array<Deck>,
};

export class DeckSelect extends React.Component<DeckSelectProps> {
  componentDidMount() {
    this.props.fetchDecks();
  }

  selectDeck(deckId: number) {
    this.props.fetchDeck(deckId);
  }

  render() {
    if (this.props.decks.length === 1) {
      return <Loading />;
    }

    return (
      <DeckSelectComponent
        decks={this.props.decks}
        selectDeck={deckId => this.selectDeck(deckId)}
      />
    );
  }
}

const mapStateToProps = (state: RootState): Object => ({
  decks: state.deck.list,
});

const mapDispatchToProps = (dispatch: Function): Object => ({
  fetchDecks: () => dispatch(getDeckList()),
  fetchDeck: deckId => dispatch(selectDeck(deckId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelect);
