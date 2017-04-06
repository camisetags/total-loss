import * as ActionTypes from './constants';

export const addUserToTheGame = (userName) => {
	return {
		type: ActionTypes.ADD_USER,
		user: {
			name: userName,
			target: false,
			score: 0
		}
	}
};