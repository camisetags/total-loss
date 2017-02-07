
export default function requireUser({ dispatch }) {
	return next => action => {
		if (action.payload.pathname === '/game') {
			
		}
		console.log('Action from initGame ', action);
	};
}