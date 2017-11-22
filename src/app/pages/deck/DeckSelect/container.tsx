import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { objToArray } from '../../../helpers/utils';
import { getDeckList, selectDeck } from '../../../data/deck/actions';
import { Deck } from '../../../data/deck/types';
import { RootState } from '../../../data/types';

import DeckSelectComponent from './component';
import Loading from '../../../components/Loading';

type DeckSelectProps = {
  fetchDecks: Function;
  fetchDeck: Function;
  decks: Deck[];
};

export class DeckSelect extends React.Component<DeckSelectProps, {}> {
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
        selectDeck={(deckId: number) => this.selectDeck(deckId)}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  decks: Object.values(state.deck),
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchDecks: () => dispatch(getDeckList()),
  fetchDeck: (deckId: number) => dispatch(selectDeck(deckId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelect as any);
