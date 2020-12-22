import React from 'react'
import { connect } from 'react-redux'

class MessageBox extends React.Component {
  render () {
    return (
      <div>聊天</div>
    )
  }
}

export default connect(
  state => state,
  {}
)(MessageBox)