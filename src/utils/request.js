import axios from 'axios';

const service = axios.create({});

service.interceptors.response.use(response => {
    console.log('get data', response);
    return response.data;
});

export default service;
