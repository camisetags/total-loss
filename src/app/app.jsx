import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import store from './store';

import Home from './pages/Home';

const App = () => (
  <Provider store={store}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Provider>
);

export default App;
