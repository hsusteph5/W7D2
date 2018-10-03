import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import Selector from './reducers/selectors.js';
import { fetchAllTodos } from './util/todosAPIUtil.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore(); //configure store returns store obj

  //TESTING
  window.store = store;
  window.fetchAllChirps = fetchAllChirps;

  //
  ReactDOM.render(
    <Root store={store}/>, root
  );
});
