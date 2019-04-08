import React, {Component} from 'react'
import {Dropdown, Icon, Menu} from 'antd'

export default class OrganizationSelectBox extends Component {
  onChangeOrganization (organizationId) {
    const {user} = this.props
    this.props.updateUserCurrentOrganizationId({userId: user.id, organizationId})
  }

  render () {
    const {user={}, organizations=[]} = this.props
    const menu = (
      <Menu onClick={evt => this.onChangeOrganization( evt.key)}>
        {organizations.map(org=><Menu.Item key={org.id} >
          {org.title}
        </Menu.Item>)}
      </Menu>
    )
    const organization = organizations.find(org=>org.id===user.currentOrganizationId) || {}
    return (
      <span>
        {organizations.length > 1
          ?
          <Dropdown overlay={menu}>
            <a style={{color:'white'}}  href='javascript:(0)'>
              {organization.title}
               <Icon type='down' />
            </a>
          </Dropdown>
          : ''}
          </span>
    )
  }
}
