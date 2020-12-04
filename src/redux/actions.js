/**
 * 包含n个action creator
 * 同步action
 * 异步action
 */
import {
    AUTH_SUCCESS,
    ERROR_MSG
} from './action-types'
import {
    baseAxios
} from '../utils/axios'
// 授权成功的同步action
const authSuccess = user => ({
    type: AUTH_SUCCESS,
    data: user
})
// 失败的同步action
const errorMsg = msg => ({
    type: ERROR_MSG,
    data: msg
})

// 登录成功的异步action
export const login = user => {
    return async dispatch => {
        try {
            const result = await baseAxios.post('/logn', user);
            if (result.status === 200) {
                // Toast.success('注册成功');
                dispatch(authSuccess(result.data))
            }
        } catch (err) {
            if (err.response) {
                dispatch(errorMsg(err.response.data.message))
            }else{
                dispatch(errorMsg('连接失败...'))
            }
        }
    }
}

// 注册成功的异步action
export const register = user => {
    return async dispatch => {
        try {
            const result = await baseAxios.post('/users', user);
            if (result.status === 200) {
                // Toast.success('注册成功');
                dispatch(authSuccess(result.data))
            }
        } catch (err) {
            // Toast.fail(`注册失败：${err.response.data.message}`)
            dispatch(errorMsg(err.response.data.message))
        }
    }
}