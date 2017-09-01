/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { sessionService } from 'redux-react-session';
import startApi from './api';
import App from './pages/App';
import createBrowserHistory from './history';

// Init the session service
sessionService.initSessionService(store,{server:false});
startApi();

render(
  <Provider store={store} history={createBrowserHistory}><App /></Provider>, document.getElementById('app')
);
