import * as ActionTypes from './constants';
import randomNames from '../utils/randomNames';

export const addUserToTheGame = (userName) => {
	userName = userName.length === 0 ? 
		randomNames[Math.floor(Math.random() * randomNames.length)] :
		userName;
		
	return {
		type: ActionTypes.ADD_USER,
		user: {
			name: userName,
			target: false,
			score: 0
		}
	}
};
