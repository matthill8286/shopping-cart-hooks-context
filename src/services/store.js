import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import promise from 'redux-promise-middleware';

export default initialState => {
  initialState = JSON.parse(window.localStorage.getItem('state')) || initialState;

  const middleware = [thunk, promise];

  // dev tools middleware
  const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

  const store = createStore(
    rootReducer,
    initialState,
    composeSetup(
      applyMiddleware(...middleware)
    )
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart,
      total: state.total
    };

    window.localStorage.setItem('state', JSON.stringify(persist));

  });

  return store;
};
