import { switchCase } from '../helpers/utils';
import * as types from './actionTypes';

const initialState = {
  list: [
    {
      title: '',
      description: '',
    },
  ],
};

const deckReducer = (state = initialState, action) =>
  switchCase(action.type)({
    [types.LIST_DECKS]: () => ({
      ...state,
      list: action.data,
    }),
  })(() => state);

export default deckReducer;
