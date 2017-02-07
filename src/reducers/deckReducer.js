import DeckActionsType from '../actions/constants/deckActionsType';

export default function deckReducer(state = [], action) {
	switch (action.type) {
		case DeckActionsType.LOAD_DECKS:
			return [ ...action.payload.data ];
		default:
			return state;
	}
}