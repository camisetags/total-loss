import * as deckTypes from './actionTypes';
import deckApi from './api';

export const getDeckList = () => (dispatch) => {
  deckApi.getList().then((response) => {
    dispatch({
      type: deckTypes.LIST_DECKS,
      data: response.data.results,
    });
  });
};

export const selectDeck = deckId => async (dispatch) => {
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
