import * as deckTypes from './actionTypes';
import DeckApi from './api';

export const getDeckList = () => (dispatch) => {
  DeckApi.getList().then((response) => {
    dispatch({
      type: deckTypes.LIST_DECKS,
      data: response.data.results,
    });
  });
};

export default getDeckList;
