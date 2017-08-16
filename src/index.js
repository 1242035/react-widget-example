import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from './route';
import configureStore from './store';
import { App, Login } from './pages';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
     <Router>
        <div className="container">
            <PrivateRoute path="/" exact={true} component={App}/>
            <Route path="/login" component={Login} />
        </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
