const axios = require('axios')

export const baseAxios = axios.create({
    timeout: 1000,
})