import DeckService from '../services/deck';
import DeckActionsType from './constants/deckActionsType';

export const fetchDecks = () => {
	let request = DeckService.query();

	return {
		type: DeckActionsType.LOAD_DECKS,
		payload: request
	};
};