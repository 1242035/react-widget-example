/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { sessionService, sessionReducer } from 'redux-react-session';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import axios from 'axios';
import { API_HOST } from './config';
import App from './components/App';
// Add the sessionReducer
const reducer = combineReducers({
    session: sessionReducer,
    form:formReducer
});

const store = createStore(reducer, undefined, compose(applyMiddleware(thunkMiddleware)));
// Init the session service
sessionService.initSessionService(store,{server:false});

sessionService.loadSession()
.then( (session) => {
    axios.defaults.headers.common['auth_token'] = session.auth_token;
    axios.defaults.headers.common['auth_token_secret'] = session.auth_token_secret;    
} )
.catch( err => console.log(err) );
axios.defaults.baseURL = API_HOST;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('app')
);
