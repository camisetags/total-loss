import ActionsType from '../actions/constants';

export default function userReducer(state = [], action) {
	switch (action.type) {
		case ActionsType.ADD_USER:
			action.user.score = 0;
			const users = [
				...state,
				action.user,
			];
			console.log(`User added ${users[users.length-1].name}`);
			return users;
		
		case ActionsType.PASS_USERS:
			return [ ...action.users ];

		default:
			return state;
	}
}