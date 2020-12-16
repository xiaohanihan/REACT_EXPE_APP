/**
 * 包含多个reducer函数，根据state和指定的action返回一个新的state
 */
import {
    combineReducers
} from 'redux'
import {
    AUTH_SUCCESS,
    ERROR_MSG
} from './action-types'

const initUser = {
    account: '',
    headUrl: '',
    nickName: ''
}
// 产生user状态的state
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...action.data
            }
        case ERROR_MSG:
            const result = {
                ...state, msg: action.data
            };
            return result;
        default:
            return state;
    }
}

export default combineReducers({
    user
})