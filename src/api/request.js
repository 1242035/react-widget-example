import axios from 'axios';

export const post = (link, params) => {
    return axios.post(`${link}`, params );
}

export const get = (link, params) => {
    return axios.get(`${link}`, params );
}