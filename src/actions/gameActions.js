import ActionsType from './constants/gameActionsType';
import DeckService from '../services/deck';

export const startGame = (deckId, users) => {
	let request = DeckService.get(deckId);

	return {
		type: ActionsType.START_GAME,
		payload: request,
		users
	};
};

export const addPoint = (userIndex, amountToAdd, game) => {
	return {
		type: ActionsType.ADD_POINT,
		userIndex,
		amountToAdd,
		game
	};
};

export const subtractPoint = (userIndex, amountToSubtract, game) => {
	return {
		type: ActionsType.SUBTRACT_POINT,
		userIndex,
		amountToSubtract,
		game
	};
};
