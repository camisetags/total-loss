import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import gameReducer from './gameReducer';
import userReducer from './userReducer';
import deckReducer from './deckReducer';

const rootReducer = combineReducers({
	users: userReducer,
	decks: deckReducer,
	game: gameReducer,
	routing: routerReducer
});

export default rootReducer;
