import * as deckTypes from './actionTypes';
import deckApi from './api';

export const getDeckList = () => async (dispatch) => {
  const response = await deckApi.getList();
  dispatch({
    type: deckTypes.LIST_DECKS,
    data: response.data.results,
  });
};

export const selectDeck = deckId => async (dispatch) => {
  const response = await deckApi.getById(deckId);
  dispatch({
    type: deckTypes.SELECT_DECK,
    data: {
      id: deckId,
      name: response.data.name,
      description: response.data.description,
      cards: [...response.data.cards],
    },
  });
};

export default getDeckList;
