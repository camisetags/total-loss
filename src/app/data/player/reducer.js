// @flow

import * as types from './actionTypes';
import { switchCase } from '../../helpers/utils';
import type { Action } from '../types';
import type { UserState } from './state';

const initialState: UserState = {
  listOfUsers: [
    {
      id: 0,
      name: '',
      description: '',
      score: 0,
    },
  ],

  listUserRandom: [],
};

const userReducer = (state: UserState = initialState, action: Action): UserState =>
  switchCase(action.type)({
    [types.ADD_USER]: () => ({
      ...state,
      listOfUsers: [...state.listOfUsers].push({
        UserState: {
          id: action.data.id,
          name: action.data.name,
          score: action.data.score,
          description: action.data.description,
        },
      }),
    }),

    [types.LIST_USER_RANDOM]: () => ({
      ...state,
      listUserRandom: [...action.data],
    }),
  })(() => ({ ...state }));

export default userReducer;
