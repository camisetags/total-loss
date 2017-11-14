/* eslint no-console: 0 */
import { normalize } from 'normalizr';
import { deckSchema } from './schemas';
import * as deckTypes from './actionTypes';
import deckApi from './api';

export const getDeckList = () => async (dispatch) => {
  const response = await deckApi.getList();
  const deckList = response.data.results.map(deck => ({
    ...deck,
    selected: false,
  }));

  dispatch({
    type: deckTypes.LIST_DECKS,
    data: normalize(deckList, [deckSchema]).entities.decks,
  });
};

export const selectDeck = deckId => async (dispatch) => {
  const response = await deckApi.getById(deckId);
  const deck = {
    id: deckId,
    selected: true,
    name: response.data.name,
    description: response.data.description,
    cards: [...response.data.cards],
  };

  dispatch({
    type: deckTypes.SELECT_DECK,
    data: normalize(deck, deckSchema).entities.decks,
  });
};

export default getDeckList;
