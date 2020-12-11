import React from 'react';
import ReactDom from 'react-dom';

import {Route, Switch, BrowserRouter, Router } from 'react-router-dom';
import Register from './containers/register';
import Login from './containers/login';
import PersonalInfoCon from './containers/personalInfo/personalInfo.jsx';
import Main from './containers/main';
import { Provider } from 'react-redux'
import store from './redux/store'
import './assets/index.less'
import history from './utils/history'
import { createBrowserHistory } from 'history'
import {} from 'react-router'

// 测试提交hahahh
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />

                <Route path='/personalInfo'>
                    <PersonalInfoCon></PersonalInfoCon>
                </Route>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))