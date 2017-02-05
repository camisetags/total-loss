import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import gameReducer from './gameReducer';
import userReducer from './userReducer';
import deckReducer from './deckReducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	game: gameReducer,
	deck: deckReducer,
	users: userReducer
});

export default rootReducer;