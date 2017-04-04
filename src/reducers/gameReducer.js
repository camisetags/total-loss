import ActionsType from '../actions/constants/gameActionsType';

export default function gameReducer(state={}, action) {
	switch(action.type) {
		case ActionsType.START_GAME:
			action.users[0].target = true;
			return {
				...state,
				deck: { 
					...action.payload, 
					cards: shuffleObjArray(action.payload.cards) 
				},
				users: [ ...action.users ],
				cardIndex: 0,
				userIndex: 0
			};
		
		case ActionsType.ADD_POINT:
			return { ...addUserPoint(state, action) };

		default:
			return state;
	}
}

function addUserPoint(state, action) {
	state.users[state.userIndex].score += action.amountToAdd;
	state.users[state.userIndex].target = false;
	state.cardIndex += 1;
	state.userIndex += 1;
	if (state.users.length <= state.userIndex) {
		state.userIndex = 0;
	}
	state.users[state.userIndex].target = true;
	console.log('Game object ====> ', state);
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