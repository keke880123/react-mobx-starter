import axios from 'axios';

const service = axios.create({});

service.interceptors.response.use(response => {
    console.log('get data');
    return response.data;
});

export default service;
