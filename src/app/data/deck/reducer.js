import { switchCase } from '../../helpers/utils';
import * as types from './actionTypes';

const initialState = {
  selected: {
    name: '',
    description: '',
    cards: [],
  },

  list: [
    {
      name: '',
      description: '',
    },
  ],
};

const deckReducer = (state = initialState, action) =>
  switchCase(action.type)({
    [types.LIST_DECKS]: () => ({
      ...state,
      list: [...action.data],
    }),

    [types.SELECT_DECK]: () => ({
      ...state,
      selected: {
        name: action.data.name,
        description: action.data.description,
        cards: [...action.data.cards],
      },
    }),
  })(() => ({ ...state }));

export default deckReducer;
