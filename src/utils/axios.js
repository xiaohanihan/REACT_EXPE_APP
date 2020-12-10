import history from './history'
let axios = require('axios')

const baseAxios = axios.create({
    baseURL: '/api',
    timeout: 1000,
})

export {
    baseAxios
}

export const formAxios = axios.create({
    timeout: 1000,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

formAxios.interceptors.response.use(res => {
    console.log('哈哈哈')
    console.log(res)
}, error => {
    // 如果返回 401，则提示重新登录
    if (error.response && error.response.data.status === 401) {
        history.push('/login')
    }
});