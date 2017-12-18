import React, { Component } from 'react'
import { Icon, Menu, Dropdown, Button } from 'antd'

const menu = (
  <Menu>
    <Menu.Item>
      <a rel='noopener noreferrer' href={this.props.userCenterHomeUrl}>
        <Icon type='user' className='margin-r-1' />个人中心
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel='noopener noreferrer' href={this.props.logoutUrl}>
        <Icon type='close' className='margin-r-1' />退出
      </a>
    </Menu.Item>
  </Menu>
)

class TwsUserInfo extends Component {
  render () {
    return (
      <Dropdown overlay={menu} placement='bottomRight'>
        <Button style={{'float': 'right'}} className='margin-t-3'>{this.props.userName} <Icon type='down' /></Button>
      </Dropdown>
    )
  }
}
export default TwsUserInfo
