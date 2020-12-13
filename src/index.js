import React from 'react';
import ReactDom from 'react-dom';

import { Route, Switch, BrowserRouter, Router } from 'react-router-dom';
import Register from './containers/register';
import Login from './containers/login';
import PersonalInfoCon from './containers/personalInfo/personalInfo.jsx';
import Main from './containers/main';
import { Provider } from 'react-redux'
import store from './redux/store'
import './assets/index.less'
import history from './utils/history'
// import { createBrowserHistory } from 'history'

// const history = createBrowserHistory()

// 测试提交hahahh
ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/login'>
          <Login key='login'></Login>
        </Route>
        <Route path='/register'>
          <Register key='register'></Register>
        </Route>
        <Route path='/personalInfo'>
          <PersonalInfoCon key='personalInfo'></PersonalInfoCon>
        </Route>
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'))