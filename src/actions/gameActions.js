import ActionsType from './constants/gameActionsType';
import DeckService from '../services/deck';

export const startGame = (deckId, users) => {
	let request = DeckService.get(deckId);

	return {
		type: ActionsType.START_GAME,
		payload: request,
		users
	}
};