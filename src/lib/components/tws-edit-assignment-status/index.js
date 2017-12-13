import React, { Component } from 'react'
import { Input, Col, Select} from 'antd'
import PropTypes from 'prop-types'
const Option = Select.Option

class EditStatusBox extends Component {

  render () {
    return (<div>
        <Col span={3}>
          <Input addonBefore='分数' defaultValue={'0'} value={this.props.grade} style={{width: 120}} disabled={this.props.disabled}
                 onChange={this.props.onChangeGrade}
                 onBlur={this.props.onBlur}
          />
        </Col>
        <Col span={3}>
          {<Select style={{width: 120}} disabled={this.props.disabled} value={this.props.status} defaultValue={'未完成'}
                   onChange={this.props.onChangeStatus}>
            <Option value='优秀'>优秀</Option>
            <Option value='已完成'>已完成</Option>
            <Option value='已提交'>已提交</Option>
            <Option value='未完成'>未完成</Option>
          </Select>}
        </Col>
      </div>
    )
  }
}

EditStatusBox.propTypes = {
  status:PropTypes.string,
  disabled: PropTypes.boolean,
  onChangeGrade: PropTypes.func,
  onChangeStatus:PropTypes.func,
  onBlur:PropTypes.func
}


export default EditStatusBox
