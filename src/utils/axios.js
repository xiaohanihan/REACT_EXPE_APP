let axios = require('axios')

export const baseAxios = axios.create({
    timeout: 1000,
})

export const formAxios = axios.create({
    timeout: 1000,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})