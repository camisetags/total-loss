// @flow

import * as userTypes from './actionTypes';
import type { User } from './state';

export const updateUsers = (user: any) => ({
  type: userTypes.UPDATE_USERS,
  data: user,
});

export const updateInputChange = (inputChange: boolean) => ({
  type: userTypes.INPUT_CHANGE,
  data: { inputChange },
});

export const postUser = (user: User) => ({
  type: userTypes.INPUT_CHANGE,
  data: user,
});
