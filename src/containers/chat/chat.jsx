import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import history from '../../utils/history'

class Chat extends React.Component {
  render () {
    return (<div>
      <NavBar icon={<Icon type="left" />}
        onLeftClick={() => history.go(-1)}>某某</NavBar>
        <div>
          
        </div>
        <div>

        </div>
    </div>)
  }
}
export default Chat;