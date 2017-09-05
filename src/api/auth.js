// Simulates server calls

import { OAUTH_AUTH } from '../config';
import { post } from './request';

export const login = (user) => {
    return post(OAUTH_AUTH, user);
};

export const logout = () => {
    return new Promise(resolve => setTimeout(resolve, 1000));
};
