import DeckService from '../services/deck';
import * as  ActionTyoes from './constants';

export const fetchDecks = (users) => {
	return (dispatch) => {
		DeckService.query()
			.then((response) => {
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