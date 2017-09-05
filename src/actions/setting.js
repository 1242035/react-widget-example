import { sessionService } from 'redux-react-session';
import * as settingApi from '../api/setting';

export const getSetting = () => {
    return () => {
        return sessionApi.getSetting()
            .then(response => {
            
        });
    };
};
