import React from 'react';
import { NavBar, Icon, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import './index.less';
import { Link } from "react-router-dom";
import { baseAxios } from '../../utils/axios'

class PhoneLoginReg extends React.Component {
    state = {
        phone: '',
        password: ''
    }

    handleChange = (stateName, val) => {
        this.setState({[stateName]: val})
    }

    login = async () => {
        const user = await baseAxios.post('/users', this.state);
        console.log(user)
    }

    render() {
        return <div>
            <NavBar
                mode="dark"
                leftContent={<Icon type="cross"></Icon>}
                rightContent={<Link to='/pwdRegister' style={{ color: 'white' }}>密码登录</Link>}
            >手机号登陆注册</NavBar>
            <WhiteSpace size="lg" />
            <div className='top_bg_div'>

            </div>
            <WhiteSpace size="xl" />
            <InputItem
                type='text'
                // defaultValue={100}
                placeholder="请输入手机号"
                moneyKeyboardAlign="left"
                onChange = {val => this.handleChange('phone', val)}
            >+86</InputItem>

            <InputItem
                type='number'
                // defaultValue={100}
                placeholder="请输入验证码"
                moneyKeyboardAlign="left"
                onChange = {val => this.handleChange('password', val)}
            >验证码</InputItem>
            <WhiteSpace size="xl" />
            <WingBlank>
                <Button type="primary" onClick={this.login}>验证登录</Button><WhiteSpace />
            </WingBlank>
            <p style={{ color: '#BBBBBB', fontSize: '12px', textAlign: "center" }}>
                未注册或未绑定哔哔哩哩的手机号，将帮你注册新账号
                <br />
                登录即代表你同意<span className='primary-color'>用户协议</span>和<span className='primary-color'>隐私政策</span>

                <br />
                <br />
                遇到问题？<span className='primary-color'>查看帮助</span>
            </p>
        </div>
    }
}

const PhoneLoginRegCon = createForm()(PhoneLoginReg);
export default PhoneLoginRegCon;