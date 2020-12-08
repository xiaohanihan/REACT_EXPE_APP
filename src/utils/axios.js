let axios = require('axios')

const baseAxios = axios.create({
    baseURL: '/api',
    timeout: 1000,
})

baseAxios.interceptors.response.use(res => {
    console.log(res)
},error => {
    // 如果返回 403，则提示重新登录
    if(error.response && error.response.status === 403){
        
    }
});

export { baseAxios }

export const formAxios = axios.create({
    timeout: 1000,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})