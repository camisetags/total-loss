import * as types from './actionTypes';
import { switchCase } from '../helpers/utils';

const initialState = [];

export default (state = initialState, action) =>
  switchCase(action.type)({
    [types.ADD_USER]: () => [...state, action.user],
  })(() => state);
