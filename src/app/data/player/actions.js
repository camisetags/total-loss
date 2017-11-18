// @flow
import * as types from './actionTypes';
import usersRandom from './users';
import type { Dispatch } from '../types';

export const addUser = (user: any) => (dispatch: Dispatch) => {
  dispatch({
    type: types.ADD_USER,
    data: user,
  });
};

export const listUsersRandom = () => (dispatch: Dispatch) => {
  dispatch({
    type: types.LIST_USER_RANDOM,
    data: usersRandom,
  });
};
