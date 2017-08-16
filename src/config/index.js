
export const PRODUCTION = 'production';

export const DEVELOPMENT = 'development';

export const ENV = process.env.NODE_ENV === PRODUCTION ? PRODUCTION : DEVELOPMENT;

export const APP_NAME = 'App';

export const API_URL = 'https://onemax.dev/api/';

export const TOKEN_KEY = 'o___tkk';

export const USER_KEY = 'o___u';

export const APP_ID = window['APP_ID'] || 'a7c89ae387f166e68291712363e27136';

export const LANG   = window['LANG'] || 'en';

export const LANGS  = window['LANGS'] || [];

export const API = {
    LOGIN: API_URL + '/oauth/auth',
};
