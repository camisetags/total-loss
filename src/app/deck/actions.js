// @flow
import * as deckTypes from './constants';
import DeckServices from './services';

export const getDeckList = () => async (dispatch) => {
  const response = await DeckServices.getList();

  dispatch({
    type: deckTypes.LIST_DECKS,
    data: response.data,
  });
};

export default getDeckList;
