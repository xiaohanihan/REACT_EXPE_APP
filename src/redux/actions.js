/**
 * 包含n个action creator
 * 同步action
 * 异步action
 */
import {
    AUTH_SUCCESS
} from './action-types'
// 授权成功的同步action
const authSuccess = user => ({
    type: AUTH_SUCCESS,
    data: user
})

// 登录成功的异步action
export const userAuthSuccess = user => {
    return async dispatch => dispatch(authSuccess(user))
}