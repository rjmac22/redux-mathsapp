import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { incrementNumber } from './actions';
import rootReducer from './reducers'

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

store.subscribe(()=>console.log('store', store.getState()));

// store.dispatch(incrementNumber(store.getState))



ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
  , document.getElementById('root'));
  registerServiceWorker();
