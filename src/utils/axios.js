let axios = require('axios')

const baseAxios = axios.create({
    baseURL: '/api',
    timeout: 1000,
})

baseAxios.interceptors.response.use(res => {
    console.log(res)
},error => {
    console.log(error.response)
});

export { baseAxios }

export const formAxios = axios.create({
    timeout: 1000,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})