import React from 'react';
import { NavBar, Icon, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { Link } from "react-router-dom";
import './index.less';
import '../../assets/index.less'
import { connect } from 'react-redux'
import {login, register} from '../../redux/actions'

class Login extends React.Component {
  state = {
    account: '',
    pwd: '',
    nickName: ''
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  login = () => {
    this.props.login(this.state)
    console.log(this.props)
  }

  handleChange = (stateName, val) => {
    this.setState({ [stateName]: val })
  }

  render() {
    return <div>
      <NavBar
        mode="dark"
        leftContent={<Icon type="cross"></Icon>}
        rightContent={<Link to='/register' style={{ color: 'white' }}>注册</Link>}
      >登录</NavBar>
      <WhiteSpace size="lg" />
      <div className='top_bg_div'>

      </div>
      <WhiteSpace size="xl" />
      <InputItem
        type='text'
        // defaultValue={100}
        placeholder="请输入账号"
        clear
        moneyKeyboardAlign="left"
        onChange={val => this.handleChange('account', val)}
      >账号</InputItem>

      <InputItem
        type='number'
        // defaultValue={100}
        placeholder="请输入密码"
        clear
        moneyKeyboardAlign="left"
        onChange={val => this.handleChange('pwd', val)}
      >密码</InputItem>
      <WhiteSpace size="xl" />
      <WingBlank>
        {/* <Button type="ghost" inline style={{ marginRight: '4%' }} className='inline-btn' onClick={this.register}>注册</Button> */}
        <Button type="primary" onClick={this.login}>登录</Button>
        <WhiteSpace />
      </WingBlank>
      <p style={{ color: '#BBBBBB', fontSize: '12px', textAlign: "center" }}>
        登录即代表你同意
        <span className='primary-color'>用户协议</span>和<span className='primary-color'>隐私政策</span>
      </p>
    </div>
  }
}

export default connect(
  state => state,
  {login, register}
)(Login)