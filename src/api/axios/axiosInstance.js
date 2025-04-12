import axios from 'axios';

export const baseURL = 'http://localhost:3000/api/v1';

export const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
