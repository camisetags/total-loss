import ActionsType from '../constants/gameActionsType';

export function startGame(player) {
	return {
		type: ActionsType.SELETCT_PLAYER
		player
	}
}