import DeckService from '../services/deck';
import DeckActionsType from './constants/deckActionsType';

export const fetchDecks = (users) => {
	let request = DeckService.query();

	return {
		type: DeckActionsType.LOAD_DECKS,
		payload: request,
		users
	};
};