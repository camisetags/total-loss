import ActionsType from '../constants/gameActionsType';

export const startGame = (player) => {
	return {
		type: ActionsType.SELETCT_PLAYER
		player
	}
};