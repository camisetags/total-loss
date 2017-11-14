import { switchCase } from '../../helpers/utils';
import * as types from './actionTypes';

const initialState = {
  0: {
    selected: false,
    name: '',
    description: '',
    cards: [],
  },
};

const deckReducer = (state = initialState, action) =>
  switchCase(action.type)({
    [types.LIST_DECKS]: () => ({
      ...action.data,
    }),

    [types.SELECT_DECK]: () => ({
      ...state,
      ...action.data,
    }),
  })(() => ({ ...state }));

export default deckReducer;
