import axios from 'axios';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

// <<<<<< BACKEND_BASE_API >>>>>>
const BASE_URL = "https://salty-hacker-1-bw.herokuapp.com/api"

export const SIGNIN = "SignIn/";
export const Dashboard = "Dashboard/";


export function call_AUTH(payload) {
    return axios.post(`${BASE_URL}${SIGNIN}`, payload)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export function call_post(endpoint, payload) {
    return axiosWithAuth()
        .post(`${BASE_URL}${endpoint}`, payload)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export function call_get(endpoint) {
    return axiosWithAuth()
        .get(`${BASE_URL}${endpoint}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}