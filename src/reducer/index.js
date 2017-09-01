
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { sessionReducer } from 'redux-react-session';

const reducer = combineReducers({
    session: sessionReducer,
    form: formReducer
});

export default reducer;