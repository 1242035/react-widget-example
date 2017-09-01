
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducer';
import { ENV } from '../config';
const store = createStore(
    reducer, 
    ENV == 'production' ? undefined :  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    compose(applyMiddleware(thunkMiddleware))
);

export default store;