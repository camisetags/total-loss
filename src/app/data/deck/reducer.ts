import { switchCase } from '../../helpers/utils';
import * as types from './actionTypes';
import { RootAction } from '../types';
import { DeckState } from './types';

const initialState: DeckState = {
  0: {
    id: 0,
    selected: false,
    name: '',
    description: '',
    cards: [],
  },
};

const deckReducer = (state = initialState, action: RootAction) =>
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
