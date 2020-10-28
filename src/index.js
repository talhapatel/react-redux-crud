import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import postReducer from './reducers/postReducer';

const store=createStore(postReducer);
// after creating store we need to wrap store with provider 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


