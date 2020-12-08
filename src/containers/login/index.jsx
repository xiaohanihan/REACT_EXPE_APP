import React from 'react';
import { NavBar, Icon, InputItem, WhiteSpace, Button, WingBlank, Toast } from 'antd-mobile';
import { Link } from "react-router-dom";
import './index.less';
import '../../assets/index.less'
import { connect } from 'react-redux'
import { userAuthSuccess } from '../../redux/actions'
import { baseAxios } from '../../utils/axios'

class Login extends React.Component {
  state = {
    account: '',
    password: '',
    nickName: '',
    isLoginDisabled: true
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  login = async () => {
    try {
      const result = await baseAxios.post('/users/login', this.state);
      if (result.status === 200) {
        this.props.userAuthSuccess(result.data)
        this.props.history.push('/')
        Toast.success('登录成功')
      }
    } catch (err) {
      if (err.response) {
        Toast.fail(err.response.data.message)
      } else {
        Toast.fail('连接失败')
      }
    }
  }

  handleChange = async (stateName, val) => {
    await this.setState({ [stateName]: val});
    const {account, password} = this.state;
    let isLoginDisabled = true;
    if(account && password){
      isLoginDisabled = false;
    }
    this.setState({ isLoginDisabled })
  }

  render() {
    const { isLoginDisabled } = this.state;
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
        type='password'
        // defaultValue={100}
        placeholder="请输入密码"
        clear
        moneyKeyboardAlign="left"
        onChange={val => this.handleChange('password', val)}
      >密码</InputItem>
      <WhiteSpace size="xl" />
      <WingBlank>
        {/* <Button type="ghost" inline style={{ marginRight: '4%' }} className='inline-btn' onClick={this.register}>注册</Button> */}
        <Button type="primary" onClick={this.login} disabled={isLoginDisabled}>登录</Button>
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
  { userAuthSuccess }
)(Login)