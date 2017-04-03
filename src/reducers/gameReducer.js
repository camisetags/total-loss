import ActionsType from '../actions/constants/gameActionsType';

function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));

    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

export default function gameReducer(state={}, action) {
	switch(action.type) {
		case ActionsType.START_GAME:
			return {
				...state,
				deck: { 
					...action.payload, 
					cards: shuffle(action.payload.cards) 
				},
				users: [ ...action.users ],
				cardIndex: 0,
				userIndex: 0
			};
		
		case ActionsType.ADD_POINT:
			state.users[state.userIndex].score += action.amountToAdd;
			state.cardIndex += 1;
			state.userIndex += 1;
			if (state.users.length <= state.userIndex) {
				state.userIndex = 0;
			}
			console.log('Game object ====> ', state);
			return { ...state };

		default:
			return state;
	}
}