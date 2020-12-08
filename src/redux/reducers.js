/**
 * 包含多个reducer函数，根据state和指定的action返回一个新的state
 */
import {
    combineReducers
} from 'redux'
import {
    AUTH_SUCCESS
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
            return action.data
        default:
            return state;
    }
}

export default combineReducers({
    user
})