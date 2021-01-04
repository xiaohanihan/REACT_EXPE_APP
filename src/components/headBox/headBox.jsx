import React from 'react'
import './headBox.less'

class HeadBox extends React.Component {

  render () {
    let { headUrl } = this.props
    headUrl = headUrl ? headUrl: require('../../assets/pictures/head.jpg')
    return (
      <div className='head-box'>
        <img className={'head-img'}
          src={headUrl}
          alt="" />
      </div>
    )
  }
}

export default HeadBox

