// @flow
import * as types from './actionTypes';
import { switchCase } from '../../helpers/utils';
import type { Action } from '../types';
import type { UserState } from './state';

const initialState: UserState = {
  listOfUsers: [],
  inputChange: false,
};

const userReducer = (state: UserState = initialState, action: Action): UserState =>
  switchCase(action.type)({
    [types.UPDATE_USERS]: () => ({
      ...state,
      listOfUsers: [...action.data],
    }),
    [types.INPUT_CHANGE]: () => ({
      ...state,
      inputChange: action.data.inputChange,
    }),
    [types.POST_USER]: () => ({ ...state, [action.data.id]: action.data }),
  })(() => ({ ...state }));
export default userReducer;
