import React from 'react';
import ReactDom from 'react-dom';

import {Route, Switch, Router } from 'react-router-dom';
import Register from './containers/register';
import Login from './containers/login';
import PersonalInfoCon from './containers/personalInfo/personalInfo.jsx';
import Main from './containers/main';
import { Provider } from 'react-redux'
import store from './redux/store'
import './assets/index.less'

// 测试提交hahahh
ReactDom.render(
    <Provider store={store}>
        <Router history={BrowserHistory}>
            {/* <Switch> */}
                <Route path='/login' component={Login} exact={true}></Route>
                <Route path='/register' component={Register} exact={true}></Route>
                <Route path='/personalInfo' component={PersonalInfoCon} exact={true}></Route>
                <Route path='/' exact={true} component={Main}></Route>
            {/* </Switch> */}
        </Router>
    </Provider>, document.getElementById('root'))