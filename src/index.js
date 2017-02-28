import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import moviesApp from './reducers'

import App from './components/app';
import './stylesheets/app.sass';

ReactDOM.render(
  <Provider store={createStore(moviesApp)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
