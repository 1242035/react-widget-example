
export const PRODUCTION = 'production';

export const DEVELOPMENT = 'development';

export const ENV = process.env.NODE_ENV == PRODUCTION ? PRODUCTION : DEVELOPMENT;

export const APP_NAME = 'App';

export const API_URL = '/api';

export const TOKEN_KEY = '_tkk';
