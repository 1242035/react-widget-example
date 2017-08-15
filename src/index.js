import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import routes from './route';
import configureStore from './store';
import { App } from './pages';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
     <Router>
        <div className="container">
            <Route path="/" component={App}/>
            <Route path="/signin" component={App} />
            <Route path="/signup" component={App} />
        </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
