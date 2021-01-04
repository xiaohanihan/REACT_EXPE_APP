/**
 * 单个用户信息的文本块
 */
import React from 'react'
import HeadBox from '../headBox/headBox'
import './userBox.less'
import { WhiteSpace } from 'antd-mobile'
import PropTypes from 'prop-types'

class UserBox extends React.Component {
  static propTypes = {
    rightContent: PropTypes.element
  }

  render () {
    const { headUrl, nickName, account, rightContent } = this.props
    return (
      <div>
        <div className='user-box'>
          <HeadBox headUrl={headUrl} />
          <div className='center-box'>
            {nickName}({account})
        </div>
          {/* <div onClick={this.add}>
          <SpanItem className={disabled ? 'disabled-btn' : ''}>添加</SpanItem>
        </div> */}
          {rightContent}
        </div>
        <WhiteSpace size='xs'/>
      </div>

    )
  }
}

export default UserBox