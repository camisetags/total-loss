import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import deckFilter from './data/filters/deckFilter';

import store from './data/store';

import Home from './pages/Home';
import DeckSelect from './pages/deck/DeckSelect';
import PlayersSelect from './pages/player/PlayerSelect';

const App = () => (
  <Provider store={store}>
    <main className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/deck-select" component={DeckSelect} />
        <Route exact path="/players-select" component={deckFilter(PlayersSelect)} />
        <Route component={DeckSelect} />
      </Switch>
    </main>
  </Provider>
);

export default App;
