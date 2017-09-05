// Simulates server calls

import { SETTING_URL } from '../config';
import { post } from './request';

export const getSetting = () => {
    return post(SETTING_URL);
};