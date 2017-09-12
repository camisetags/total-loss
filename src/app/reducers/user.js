import * as types from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, action.user];

    default:
      return state;
  }
};
