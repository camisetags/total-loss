import { switchCase } from '../helpers/utils';
import * as types from './actionTypes';

const initialState = {
  deckList: [],
};

const deckReducer = (state = initialState, action) =>
  switchCase(action.type)({
    [types.LIST_DECKS]: () => ({
      ...state,
      deckList: action.data.results,
    }),
  })(() => state);

export default deckReducer;
