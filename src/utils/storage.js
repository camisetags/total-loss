
export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (error) {
		console.log(`Error when trying to serialize the state: \n ${error}`);
	}
};

export const clearUsersAndGame = () =>  {
	baseStateClear('users');
};

export const clearDecks = () =>  {
	baseStateClear('decks');
};

function baseStateClear(stateProp) {
	try {
		const state = loadState();
		state[stateProp] = [];
		state.game = {};
		saveState(state);
	} catch(error) {
		console.log(`Error when trying to load the state: \n ${error}`);
	}
}
