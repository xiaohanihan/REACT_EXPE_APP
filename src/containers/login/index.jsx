import React from 'react';
import { NavBar, Icon, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import './index.less'

class LoginC extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        const { getFieldProps } = this.props.form;
        return <div>
            <NavBar
                mode="dark"
                leftContent={<Icon type="cross"></Icon>}
                rightContent={<p>密码登录</p>}
            >手机号登陆注册</NavBar>
            <WhiteSpace size="lg" />
            <div className='top_bg_div'>

            </div>
            <WhiteSpace size="xl" />
            <InputItem
                {...getFieldProps('money3')}
                type='text'
                // defaultValue={100}
                placeholder="请输入手机号"
                clear
                moneyKeyboardAlign="left"
            >+86</InputItem>

            <InputItem
                {...getFieldProps('money3')}
                type='number'
                // defaultValue={100}
                placeholder="请输入验证码"
                clear
                moneyKeyboardAlign="left"
            >验证码</InputItem>
            <WhiteSpace size="xl" />
            <WingBlank>
                <Button type="primary">验证登录</Button><WhiteSpace />
            </WingBlank>
        </div>
    }
}

const Login = createForm()(LoginC);
export default Login;