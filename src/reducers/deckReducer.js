import ActionsType from '../actions/constants';

export default function deckReducer(state = [], action) {
	switch (action.type) {
		case ActionsType.LOAD_DECKS:
			return [ ...action.payload.data ];
		default:
			return state;
	}
}