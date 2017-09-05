import { sessionService } from 'redux-react-session';
import * as sessionApi from '../api/auth';

export const login = (user, history) => {
    return () => {
        return sessionApi.login(user)
            .then(response => {
                sessionService.saveSession({
                        auth_token:response.data.oauth_token,
                        auth_token_secret:response.data.oauth_token_secret,
                        expires_in:response.data.expires_in,
                        expires_at:response.data.expires_at
                    })
                    .then(() => {
                        sessionService.saveUser(response.data)
                        .then(() => {
                            history.push('/');
                        })
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        });
    };
};

export const logout = (history) => {
    return () => {
        return sessionApi.logout().then(() => {
            sessionService.deleteSession();
            sessionService.deleteUser();
            history.push('/login');
        }).catch(err => {
            throw (err);
        });
    };
};
