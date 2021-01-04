import history from './history';
import cookies from 'react-cookies';
import {
  Toast
} from 'antd-mobile'

let axios = require('axios')
axios.default.timeout = 10000
// axios.defaults.headers['Authorization'] = 'Bearer ' + cookies.load('token')

axios.interceptors.request.use(function (config) {
  config.headers.authorization = 'Bearer ' + cookies.load('token')
  return config;
}, function (ret) {
  console.log(ret);
})

const baseAxios = axios.create({
  baseURL: '/api',
})

baseAxios.interceptors.request.use(function (config) {
  config.headers.authorization = 'Bearer ' + cookies.load('token')
  return config;
}, function (ret) {
  console.log(ret);
})

baseAxios.interceptors.response.use(res => {
  return res;
}, error => {
  // 如果返回 401，则提示重新登录
  if (error.response.status === 401)
  {
    history.push('/login')
    Toast.fail(error.response.data.message)
    return error.response
  } else if (error.response.status === 504)
    {
      Toast.fail('连接服务器失败')
      return error.response
    }
  Toast.fail(error.response.data.message)
  return error
});

const formAxios = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

formAxios.interceptors.request.use(function (config) {
  config.headers.authorization = 'Bearer ' + cookies.load('token')
  return config;
}, function (ret) { })

formAxios.interceptors.response.use(res => {
  return res;
}, error => {
  // 如果返回 401，则提示重新登录
  if (error.response.status === 401)
  {
    history.push('/login')
    Toast.fail(error.response.data.message)
    return error.response
  }
  Toast.fail(error.response.data)
  return error
});

export {
  baseAxios,
  formAxios
}