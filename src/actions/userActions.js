import UserActionsType from './constants/userActionsType';

export const addUserToTheGame = (userName, playerNum) => {
	return {
		type: UserActionsType.ADD_USER,
		user: {
			id: playerNum,
			name: userName,
			target: false
		}
	}
};