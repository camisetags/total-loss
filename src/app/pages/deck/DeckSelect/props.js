// @flow
import type { Deck } from '../../../data/deck/state';

export type DeckSelectProps = {
  decks: Object[],
  selectDeck: Function,
};

export type DeckSelectContainerProps = {
  fetchDecks: Function,
  fetchDeck: Function,
  decks: Array<Deck>,
};
