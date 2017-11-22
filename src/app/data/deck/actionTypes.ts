import { Deck, DeckState } from './types';

export const LIST_DECKS = 'LIST_DECKS';
export const SELECT_DECK = 'SELECT_DECK';

export type Actions = {
  LIST_DECKS: {
    type: typeof LIST_DECKS;
    data: DeckState;
  };
  SELECT_DECK: {
    type: typeof SELECT_DECK;
    data: DeckState;
  };
};
