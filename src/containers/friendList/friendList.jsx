import React from 'react'
import { NavBar, WhiteSpace } from 'antd-mobile'
import { Plus } from '../../utils/importSvg'
import history from '../../utils/history'
import { baseAxios } from '../../utils/axios'
import { connect } from "react-redux";
import './friendList.less'
import UserBox from '../../components/userBox/userBox'
class FriendList extends React.Component {
  state = {
    friends: [],
  }

  componentDidMount = async () => {
    const { _id } = this.props.user
    if (_id)
    {
      const { data: users, status } = await baseAxios.get(`/users/${_id}/friends`)
      if (status === 200)
      {
        this.setState({ friends: users })
      }
    }

  }

  componentWillUnmount = () => {
    this.setState = () => {
      return;
    };
  }


  add = () => {
    history.push('/addFriend')
  }

  render () {
    const { friends } = this.state
    return (
      <div style={{ height: '100%' }}>
        <NavBar className='nav-back' rightContent={<img onClick={this.add} style={{ height: '30px', width: '30px' }} src={Plus} alt='' />}>
          通讯录
        </NavBar>
        <WhiteSpace />
        <div className='user-out-box'>
          {
            friends.map(friend => (
              <div key={friend._id}>
                <UserBox {...friend}></UserBox>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default connect(
  state => state,
  {}
)(FriendList)