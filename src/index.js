import React from 'react';
import ReactDom from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';
import PhoneLoginRegCon from './containers/phoneLoginReg';
import PwdLoginCon from './containers/pwdLogin';
import PersonalInfoCon from './containers/personalInfo/personalInfo.jsx';
import Main from './containers/main';
import { Provider } from 'react-redux'
import store from './redux/store'
import './assets/index.less'

ReactDom.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/phoneLoginReg' component={PhoneLoginRegCon}></Route>
                <Route path='/pwdRegister' component={PwdLoginCon}></Route>
                <Route path='/personalInfo' component={PersonalInfoCon}></Route>
                <Route component={Main}></Route>
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'))