import React from 'react';
import { NavBar, Icon, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Link } from "react-router-dom";
import './index.less';
import '../../assets/index.less'

class PwdLogin extends React.Component {
  state = {
    account: '',
    pwd: ''
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  register = () => {
    this.props.history.push('/phoneLoginReg')
  }

  handleChange = (stateName, val) => {
    this.setState({ [stateName]: val })
  }

  render() {
    const { getFieldProps } = this.props.form;
    return <div>
      <NavBar
        mode="dark"
        leftContent={<Icon type="cross"></Icon>}
        rightContent={<Link to='/phoneLoginReg' style={{ color: 'white' }}>手机登录</Link>}
      >密码登录</NavBar>
      <WhiteSpace size="lg" />
      <div className='top_bg_div'>

      </div>
      <WhiteSpace size="xl" />
      <InputItem
        {...getFieldProps('money3')}
        type='text'
        // defaultValue={100}
        placeholder="请输入账号"
        clear
        moneyKeyboardAlign="left"
        onChange={val => this.handleChange('account', val)}
      >账号</InputItem>

      <InputItem
        {...getFieldProps('money3')}
        type='number'
        // defaultValue={100}
        placeholder="请输入密码"
        clear
        moneyKeyboardAlign="left"
        onChange={val => this.handleChange('pwd', val)}
      >密码</InputItem>
      <WhiteSpace size="xl" />
      <WingBlank>
        <Button type="ghost" inline style={{ marginRight: '4%' }} className='inline-btn' onClick={this.register}>注册</Button>
        <Button type="primary" inline className='inline-btn'>登录</Button>
        <WhiteSpace />
      </WingBlank>
      <p style={{ color: '#BBBBBB', fontSize: '12px', textAlign: "center" }}>
        登录即代表你同意
        <span className='primary-color'>用户协议</span>和<span className='primary-color'>隐私政策</span>
      </p>
    </div>
  }
}

const PwdLoginCon = createForm()(PwdLogin);
export default PwdLoginCon;