import React from 'react';
import ReactDom from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/login';
import Register from './containers/register';
import Main from './containers/main';
import { Provider } from 'react-redux'
import store from './redux/store'
import './assets/index.less'

ReactDom.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route component={Main}></Route>
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'))