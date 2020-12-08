import React from 'react';
import { NavBar, Icon, InputItem, WhiteSpace, Button, WingBlank, Toast } from 'antd-mobile';
import { userAuthSuccess } from '../../redux/actions'
import './index.less';
import { Link } from "react-router-dom";
import { baseAxios, doRequest } from '../../utils/axios';
import { connect } from 'react-redux'

/**
 * 注册
 */
class Register extends React.Component {
    state = {
        account: '',
        password: '',
        nickName: '',
        isLoginDisabled: true
    }

    handleChange = async (stateName, val) => {
        await this.setState({ [stateName]: val });
        const { account, password, nickName } = this.state;
        let isLoginDisabled = true;
        if (account && password && nickName) {
            isLoginDisabled = false;
        }
        this.setState({ isLoginDisabled })
    }

    register = async () => {
        const { data, status } = await doRequest(() => baseAxios.post('/users', this.state), 200)
        if (status === 200) {
            this.props.userAuthSuccess(data)
            this.props.history.push('/')
            Toast.success('注册成功')
        }
    }

    render() {
        return <div>
            <NavBar
                mode="dark"
                leftContent={<Icon type="cross"></Icon>}
                rightContent={<Link to='/login' style={{ color: 'white' }}>密码登录</Link>}
            >注册</NavBar>
            <WhiteSpace size="lg" />
            <div className='top_bg_div'>

            </div>
            <WhiteSpace size="xl" />
            <InputItem
                type='text'
                // defaultValue={100}
                placeholder="请输入账号"
                moneyKeyboardAlign="left"
                onChange={val => this.handleChange('account', val)}
            >账号</InputItem>

            <InputItem
                // defaultValue={100}
                placeholder="请输入密码"
                moneyKeyboardAlign="left"
                type='password'
                onChange={val => this.handleChange('password', val)}
            >密码</InputItem>

            <InputItem
                // defaultValue={100}
                placeholder="请输入昵称"
                moneyKeyboardAlign="left"
                onChange={val => this.handleChange('nickName', val)}
            >昵称</InputItem>
            <WhiteSpace size="xl" />
            <WingBlank>
                <Button type="primary" onClick={this.register} disabled={this.state.isLoginDisabled}>注册</Button><WhiteSpace />
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

export default connect(
    state => state,
    { userAuthSuccess }
)(Register)