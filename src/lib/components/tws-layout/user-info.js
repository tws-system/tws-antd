import React, { Component } from 'react'
import { Icon, Menu, Dropdown, Button } from 'antd'
import {convertContent} from '../../contants/lang-util'

class TwsUserInfo extends Component {

  render () {
    const menu = (
      <Menu>
        <Menu.Item>
          <a rel='noopener noreferrer' href={this.props.userCenterHomeUrl}>
            <Icon type="setting" className='margin-r-1' /> {convertContent('个人中心')}
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel='noopener noreferrer' href={this.props.logoutUrl}>
            <Icon type='logout' className='margin-r-1' /> {convertContent('退出')}
          </a>
        </Menu.Item>
      </Menu>
    )

    return (
      <Dropdown overlay={menu} placement='bottomRight'>
        <Button  icon="user">{this.props.userName}</Button>
      </Dropdown>
    )
  }
}
export default TwsUserInfo
