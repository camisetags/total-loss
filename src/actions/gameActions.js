import ActionsType from './constants/gameActionsType';
import DeckService from '../services/deck';

// export const startGame = (deckId, users) => {
// 	let request = DeckService.get(deckId);

	// return {
	// 	type: ActionsType.START_GAME,
	// 	payload: request,
	// 	users
	// };
// };

export const startGame = (deckId, users) => {
	return (dispatch) => {
		DeckService.get(deckId)
			.then((response) => {
				console.log(`Response of deck service ${response}`);
				dispatch({
					type: ActionsType.START_GAME,
					payload: response,
					users
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const addPoint = (amountToAdd) => {
	console.log('Amount to add ======> ', amountToAdd);
	return {
		type: ActionsType.ADD_POINT,
		amountToAdd
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
