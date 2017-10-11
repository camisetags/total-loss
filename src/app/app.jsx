import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import store from './data/store';

import Home from './pages/Home';
import DeckSelect from './pages/deck/DeckSelect';

const App = () => (
  <Provider store={store}>
    <main className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/deck-select" component={DeckSelect} />
      </Switch>
    </main>
  </Provider>
);

export default App;
