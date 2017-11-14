import { combineReducers } from 'redux';
import { create } from 'redux-orm';
import deck from './deck/reducer';
import user from './player/reducer';

const rootReducer = combineReducers({
  deck,
  user,
});

export default rootReducer;
