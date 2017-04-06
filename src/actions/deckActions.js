import DeckService from '../services/deck';
import * as  ActionTyoes from './constants';

export const fetchDecks = (users) => {
	return (dispatch) => {
		console.log(`Chegou um pouco antes da requisição de fetch decks`);
		DeckService.query()
			.then((response) => {
				console.log(`Processou requisição de decks`);
				return dispatch({
					type: ActionTyoes.LOAD_DECKS,
					data: response.data,
					users
				})
			})
			.catch((error) => {
				console.error(error);
			});
	};
};