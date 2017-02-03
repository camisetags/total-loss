import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import gameReducer from './gameReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	game: gameReducer,
	userCu: userReducer
});

export default rootReducer;