import * as ActionsType from '../actions/constants';

export default function gameReducer(state={}, action) {
	switch(action.type) {
		case ActionsType.START_GAME:
			action.users[0].target = true;
			return {
				...state,
				deck: { 
					title: action.deck.title, 
					cards: shuffleObjArray(action.deck.cards) 
				},
				users: [ ...action.users ],
				cardIndex: 0,
				userIndex: 0
			};
		
		case ActionsType.ADD_POINT:
			return { ...addUserPoint(state, action) };
		
		case ActionsType.CLEAR_ALL:
			return {};

		default:
			return state;
	}
}

function addUserPoint(state, action) {
	state.users[state.userIndex].score += action.amountToAdd;
	state.users[state.userIndex].target = false;
	state.cardIndex += 1;
	state.userIndex += 1;
	state.userIndex = checkIfUserIndexExists(state);
	state.users[state.userIndex].target = true;
	state = checkIfCardsIndexExists(state);
	return state;
}

function checkIfUserIndexExists(state) {
	return state.users.length <= state.userIndex ? 0 : state.userIndex;
}

function checkIfCardsIndexExists(state) {
	if (state.deck.cards.length <= state.cardIndex) {
		const winner = state.users.reduce((prev, curr) => prev > curr ? prev : curr);
		winner.isWinner = true;
		return winner;
	}
	return state;
}

function shuffleObjArray(sourceArray) {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (sourceArray.length - i));

    let temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}
