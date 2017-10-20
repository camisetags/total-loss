import { combineReducers } from 'redux';
import user from './player/reducer';
import deck from './deck/reducer';

const rootReducer = combineReducers({
  user,
  deck,
});

export default rootReducer;
