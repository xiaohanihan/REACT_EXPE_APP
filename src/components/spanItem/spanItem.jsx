import React from 'react'
import { Icon } from 'antd-mobile'
import './spanItem.less'

export default class SpanItem extends React.Component{

    render() {
        return <div className="main-style">
            {this.props.children}&emsp;<Icon type='right' />
        </div>
    }
}