import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './rootReducer';

/* istanbul ignore next */
const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
  ),
);

export default store;
