import * as ActionsType from '../actions/constants';

export default function userReducer(state = [], action) {
	switch (action.type) {
		case ActionsType.ADD_USER: 
			return [ ...state, action.user ];
		
		case ActionsType.PASS_USERS:
			return [ ...action.users ];
		
		case ActionsType.CLEAR_ALL:
			return [];

		default:
			return state;
	}
}