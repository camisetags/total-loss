import { normalize } from 'normalizr';
import { Deck } from './types';
import { deckSchema } from './schemas';
import * as deckActions from './actionTypes';
import deckApi from './api';

import { Dispatch } from 'redux';

export const getDeckList = () => async (dispatch: Dispatch<deckActions.Actions>) => {
  const response = await deckApi.getList();
  const deckList = response.data.results.map((deck: Deck) => ({
    ...deck,
    selected: false,
  }));

  dispatch({
    type: deckActions.LIST_DECKS,
    data: normalize(deckList, [deckSchema]).entities.decks,
  });
};

export const selectDeck = (deckId: number) => async (dispatch: Dispatch<deckActions.Actions>) => {
  const response = await deckApi.getById(deckId);
  const deck = {
    id: deckId,
    selected: true,
    name: response.data.name,
    description: response.data.description,
    cards: [...response.data.cards],
  };

  dispatch({
    type: deckActions.SELECT_DECK,
    data: normalize(deck, deckSchema).entities.decks,
  });
};

export default getDeckList;
