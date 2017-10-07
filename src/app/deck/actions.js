import * as deckTypes from './actionTypes';
import DeckService from './services';

export const getDeckList = () => (dispatch) => {
  DeckService.getList().then((response) => {
    dispatch({
      type: deckTypes.LIST_DECKS,
      data: response.data.results,
    });
  });
};

export default getDeckList;
