import ActionsType from '../actions/constants/gameActionsType';

function gameReducer(state={}, action) {
	switch(action.type) {
		case ActionsType.START_GAME:
			return state;

		case ActionsType.SELETCT_PLAYER:
			console.log(state);
			return state;

		default:
			return {...state};
	}
}

export default gameReducer;