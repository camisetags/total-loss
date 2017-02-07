import ActionsType from '../actions/constants/gameActionsType';

function gameReducer(state={}, action) {
	switch(action.type) {
		case ActionsType.START_GAME:
			return {
				deck: action.payload.data,
				players: action.players
			};

		default:
			return state;
	}
}

export default gameReducer;