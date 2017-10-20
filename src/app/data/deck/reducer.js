// @flow
import { switchCase } from '../../helpers/utils';
import * as types from './actionTypes';
import type { Action } from '../types';
import type { DeckState } from './state';

const initialState: DeckState = {
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

const deckReducer = (state: DeckState = initialState, action: Action): DeckState =>
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
