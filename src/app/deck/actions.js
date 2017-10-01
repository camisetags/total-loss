import * as deckTypes from './actionTypes';
import DeckService from './services';

export const getDeckList = () => async (dispatch) => {
  const response = await DeckService.getList();

  dispatch({
    type: deckTypes.LIST_DECKS,
    data: response.data,
  });
};

export default getDeckList;
