
import axios from 'axios';
import { sessionService } from 'redux-react-session';
import { ENV, API_HOST } from '../config';

export default function startApi(){
    sessionService.loadSession()
    .then( (session) => {
        axios.defaults.headers.common['auth_token'] = session.auth_token;
        axios.defaults.headers.common['auth_token_secret'] = session.auth_token_secret;    
    } )
    .catch( err => console.log(err) );
    axios.defaults.baseURL = API_HOST;
    //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}
