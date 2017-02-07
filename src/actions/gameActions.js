import ActionsType from './constants/gameActionsType';
import DeckService from '../services/deck';

export const startGame = (users, deckId) => {
	let request = DeckService.get(deckId);

	return {
		type: ActionsType.START_GAME,
		users,
		payload: request
	}
};