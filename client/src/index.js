import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/muicss/dist/css/mui.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = {}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
//registerServiceWorker();
