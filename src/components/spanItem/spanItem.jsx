import React from 'react'
import { Icon } from 'antd-mobile'
import './spanItem.less'

export default class SpanItem extends React.Component {

  render () {
    const {
      className
    } = this.props;
    const divCls = `main-style ${className}`
    return <div className={divCls}>
      {this.props.children}{this.props.rightContent}
    </div>
  }
}