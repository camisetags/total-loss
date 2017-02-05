import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import reduxThunk from 'redux-thunk';

import App from './components/app';
import SelectPlayers from './components/game/selectPlayers';
import DeckSelect from './components/deck/selectDeck';
import requireUsers from './components/cards/requireUsers';

import reducers from './reducers';
import { saveState } from './utils/storage';

import Async from './middlewares/async';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './styles/style.css';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);
const store = createStoreWithMiddleware(reducers);

const history = syncHistoryWithStore(browserHistory, store)

store.subscribe(() => {
	saveState(store.getState());
});

const documentElement = document.getElementById('app');

const AppRoutes = () => (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={SelectPlayers} />
				<Route path="/select-deck" component={DeckSelect} />
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render(<AppRoutes />, documentElement);
