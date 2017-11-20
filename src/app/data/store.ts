import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './rootReducer';

const w = window as any;

/* istanbul ignore next */
const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    typeof w === 'object' && typeof w.devToolsExtension !== 'undefined'
      ? w.devToolsExtension()
      : (f: Function) => f,
  ),
);

export default store;
