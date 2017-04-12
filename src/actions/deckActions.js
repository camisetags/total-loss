import DeckService from '../services/deck';
import * as  ActionTyoes from './constants';

export const fetchDecks = () => {
	return (dispatch) => {
		DeckService.query()
			.then((response) => {
				return dispatch({
					type: ActionTyoes.LOAD_DECKS,
					decks: response.data
				})
			})
			.catch((error) => {
				console.error(error);
			});
	};
};
