import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import SelectPlayers from './components/game/selectPlayers';
import DeckSelector from './components/cards/deckSelector';
import reducers from './reducers';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './styles/style.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const documentElement = document.getElementById('root');

const AppRoutes = () => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={SelectPlayers} />
				<Route path="/select-deck" component={DeckSelector} />
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render(<AppRoutes />, documentElement);
