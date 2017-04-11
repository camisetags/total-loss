import * as ActionsType from './constants';
import DeckService from '../services/deck';

export const startGame = (deckId, users) => {
	return (dispatch) => {
		DeckService.get(deckId)
			.then((response) => {
				dispatch({
					type: ActionsType.START_GAME,
					payload: response,
					users
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};
};

export const addPoint = (amountToAdd) => {
	return {
		type: ActionsType.ADD_POINT,
		amountToAdd
	};
};