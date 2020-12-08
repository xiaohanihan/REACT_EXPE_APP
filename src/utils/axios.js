import {
    Toast
} from 'antd-mobile'
let axios = require('axios')

export const baseAxios = axios.create({
    baseURL: '/api',
    timeout: 1000,
})

export const formAxios = axios.create({
    timeout: 1000,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export const doRequest = async (func, successCode = 200) => {
    let result = null;
    try {
        result = await func();
    } catch (err) {
        let message = '';
        if (err.response) {
            message = err.response.data.message;
            result = err.response;
        } else {
            message = err;
        }
        Toast.fail(message)
    }
    return result;
}