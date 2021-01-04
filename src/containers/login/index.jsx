import React from 'react';
import { NavBar, Icon, InputItem, WhiteSpace, Button, WingBlank, Toast } from 'antd-mobile';
import { Link } from "react-router-dom";
import './index.less';
import '../../assets/index.less'
import { connect } from 'react-redux'
import { userAuthSuccess } from '../../redux/actions'
import { baseAxios } from '../../utils/axios'
import cookies from "react-cookies";
import history from '../../utils/history';

class Login extends React.Component {
  state = {
    account: '',
    password: '',
    nickName: '',
    disabled: true
  }
  componentDidMount () {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  login = async () => {
    try
    {
      const result = await baseAxios.post('/users/login', this.state);
      console.log(result)
      if (result.status === 200)
      {
        this.props.userAuthSuccess(result.data.user)
        // 将token存储到cookie中
        cookies.save('token', result.data.token)
        history.push('/personalInfo')
        Toast.success('登录成功')
      }
    } catch (err)
    {
      if (err.response)
      {
        Toast.fail(err.response.data.message)
      } else
      {
        Toast.fail('连接失败')
      }
    }
  }

  handleChange = async (stateName, val) => {
    await this.setState({ [stateName]: val })
    const { account, password } = this.state
    if(account && password){
      this.setState({disabled: false})
    }else{
      this.setState({disabled: true})
    }
  }

  render () {
    const { disabled } = this.state
    return <div>
      <NavBar
        mode="dark"
        leftContent={<Icon type="cross"></Icon>}
        rightContent={<Link to='/register' style={{ color: 'white' }}>注册</Link>}
      >登录</NavBar>
      <WhiteSpace size="lg" />
      <div className='top_bg_div'></div>
      <WhiteSpace size="xl" />
      <form>
        <InputItem
          type='text'
          // defaultValue={100}
          placeholder="请输入账号"
          clear
          moneyKeyboardAlign="left"
          onChange={val => this.handleChange('account', val)}
          autoComplete="off"
        >账号</InputItem>

        <InputItem
          type='password'
          // defaultValue={100}
          placeholder="请输入密码"
          clear
          moneyKeyboardAlign="left"
          onChange={val => this.handleChange('password', val)}
          autoComplete="off"
        >密码</InputItem>
        <WhiteSpace size="xl" />
        <WingBlank>
          {/* <Button type="ghost" inline style={{ marginRight: '4%' }} className='inline-btn' onClick={this.register}>注册</Button> */}
          <Button disabled={disabled} type="primary" className='hhh' onClick={this.login}>登录</Button>
          <WhiteSpace />
        </WingBlank>
      </form>
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