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
				deck: { 
					...action.payload, 
					cards: shuffle(action.payload.cards) 
				},
				users: [ ...action.users ]
			};
		
		case ActionsType.ADD_POINT:
			action.game.users[action.userIndex].score += action.amountToAdd;
			console.log('Game object ====> ', action.game);
			return action.game;

		default:
			return state;
	}
}