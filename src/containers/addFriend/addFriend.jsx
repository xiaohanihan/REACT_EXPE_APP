import React from 'react'
import { connect } from 'react-redux'
import { InputItem, NavBar, WhiteSpace, Toast, Icon } from 'antd-mobile'
import { baseAxios } from '../../utils/axios'
import UserBox from '../../components/userBox/userBox'
import './addFriend.less'
import history from '../../utils/history'
import SpanItem from '../../components/spanItem/spanItem'

class AddFriend extends React.Component {

  state = {
    searchKey: '',
    userList: [],
    disabled: false
  }

  handleChange (stateName, value) {
    this.setState({ [stateName]: value })
  }

  keyUp = (e) => {
    if (e.keyCode === 13)
    {
      this.search()
    }
  }

  search = async () => {
    const { searchKey } = this.state;
    if (!searchKey)
    {
      return;
    }
    const { data, status } = await baseAxios.get(`/users/get/like?searchKey=${searchKey}`)
    if (status === 200)
    {
      this.setState({ userList: data })
    } else
    {
      Toast.fail('查询失败')
    }
  }


  add = async (_id) => {
    // 如果按钮是启用状态才调接口
    let { userList } = this.state;
    const result = await baseAxios.put(`/users/friends/${_id}`)

    if (result.status === 204)
    {
      Toast.success('添加成功')
      userList = userList.filter(user => user._id !== _id)
      this.setState({userList})
    }
  }

  render () {
    const { userList } = this.state

    const rightContent = (_id) => {
      return (<div onClick={() => this.add(_id)}>
        <SpanItem>添加</SpanItem>
      </div>)
    }

    return (
      <div style={{ height: '100%' }}>
        <NavBar icon={<Icon type="left" />}
          onLeftClick={() => history.go(-1)}>添加好友</NavBar>
        <WhiteSpace size='lg' />
        <InputItem placeholder='请输入账号或者昵称' onKeyUp={this.keyUp} onChange={(value) => this.handleChange('searchKey', value)} />

        <WhiteSpace size='lg' />
        <div className='user-list-box'>
          {userList.map(user => {
            return (
              <div className='user-box-out' key={user._id}>
                <UserBox {...user} rightContent={rightContent(user._id)}></UserBox>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => (state),
  {}
)(AddFriend)