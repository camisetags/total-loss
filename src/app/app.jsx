import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import store from './core/store';
import Home from './core/pages/Home';

const App = () => (
  <Provider store={store}>
    <main className="container">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  </Provider>
);

export default App;
