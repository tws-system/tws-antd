import React, { Component } from 'react'
import { Select } from 'antd'
import {convertContent} from "../../contants/lang-util";

const Option = Select.Option

export default class OrganizationSelectBox extends Component {
  onChangeOrganization (organizationId) {
    const {user} = this.props
    this.props.updateUserCurrentOrganizationId({userId: user.id, organizationId})
  }

  render () {
    const {user={}, organizations=[]} = this.props
    console.log(organizations)
    return (
      <div className='organization-site'>
        {organizations.length > 1
          ? <span> {convertContent('当前组织')} ：
            <Select
              size='small'
              className='organization-select'
              value={user.currentOrganizationId}
              onChange={this.onChangeOrganization.bind(this)}>
              {organizations.map(organization => {
                return <Option key={organization.id}
                  value={organization.id}>
                  {organization.title}
                </Option>
              })}
            </Select>
          </span>
          : ''}
      </div>
    )
  }
}
