// @flow
import * as deckTypes from './actionTypes';
import deckApi from './api';
import type { Dispatch } from '../types';

export const getDeckList = () => async (dispatch: Dispatch): Promise<any> => {
  const response = await deckApi.getList();
  dispatch({
    type: deckTypes.LIST_DECKS,
    data: response.data.results,
  });
};

export const selectDeck = (deckId: number) => async (dispatch: Dispatch): Promise<any> => {
  const response = await deckApi.getById(deckId);
  dispatch({
    type: deckTypes.SELECT_DECK,
    data: {
      name: response.data.name,
      description: response.data.description,
      cards: [...response.data.cards],
    },
  });
};

export default getDeckList;
