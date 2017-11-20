import * as types from './actionTypes';
import { switchCase } from '../../helpers/utils';

const initialState: any[] = [];

export default (state = initialState, action: any) =>
  switchCase(action.type)({
    [types.ADD_USER]: () => [...state, action.user],
  })(() => state);
