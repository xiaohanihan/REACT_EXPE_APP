import React from 'react';
import ReactDom from 'react-dom';

import { Route, Switch, Router } from 'react-router-dom';
import Register from './containers/register';
import Login from './containers/login';
import Main from './containers/main';
import { Provider } from 'react-redux'
import store from './redux/store'
import './assets/index.less'
import history from './utils/history'
import AddFriend from './containers/addFriend/addFriend'
import Chat from './containers/chat/chat'

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/register'>
          <Register></Register>
        </Route>
        <Route path='/addFriend' component={props => <AddFriend  {...props} />}></Route>
        <Route path='/chat' component={props => <Chat  {...props} />}></Route>

        <Route  path='/'>
          <Main></Main>
        </Route>
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'))