import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import SelectPlayers from './components/user/selectPlayers';
import DeckSelect from './components/deck/selectDeck';
import Game from './components/game/game';
import GameOver from './components/game/gameOver';
import StartScreen from './components/startScreen/start';
import requireUsers from './components/filters/requireUsers';

import reducers from './reducers';

import { loadState, saveState } from './utils/storage';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'font-awesome/css/font-awesome.css';
import 'animate.css/animate.css';
import './styles/style.styl';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const initialState = loadState();
const store = createStoreWithMiddleware(reducers, initialState);
const history = syncHistoryWithStore(hashHistory, store);

store.subscribe(() => saveState(store.getState()));

const documentElement = document.getElementById('app');

const AppRoutes = () => (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={StartScreen} />
				<Route path="/select-players" component={SelectPlayers} />
				<Route path="/select-deck" component={requireUsers(DeckSelect)} />
				<Route path="/game" component={requireUsers(Game)} />
				<Route path="/game-over/:username" component={requireUsers(GameOver)} />
				<Route path="*" compoenent={SelectPlayers} />
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render(<AppRoutes />, documentElement);
