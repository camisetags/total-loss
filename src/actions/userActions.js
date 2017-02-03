import UserActionsType from './constants/userActionsType';

export function addUserToTheGame(userName, playerNum) {
	return {
		type: UserActionsType.ADD_USER,
		user: {
			id: playerNum,
			name: userName,
		}
	}
}