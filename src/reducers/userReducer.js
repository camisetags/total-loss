import UserActionsType from '../actions/constants/userActionsType';

export default function userReducer(state = [], action) {
	switch (action.type) {
		case UserActionsType.ADD_USER:
			action.user.score = 0;
			const users = [
				...state,
				action.user
			];
			console.log(`User added ${users[users.length-1].name}`);
			return users;
		
		case UserActionsType.PASS_USERS:
			return [ ...action.users ];

		default:
			return state;
	}
}