import ActionsType from '../constants/actionsType';

export function startGame(players) {
	return {
		type: ActionsType.Start
		players
	}
}