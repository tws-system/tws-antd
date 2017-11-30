import React, { Component } from 'react'
import { Input, Col, Select} from 'antd'
import PropTypes from 'prop-types'
const Option = Select.Option

class EditStatusBox extends Component {

  render () {
    return (<div>
        <Col span={3}>
          <Input addonBefore='分数' defaultValue={'0'} grade={this.props.grade} style={{width: 120}} disabled={this.props.disable}
                 onChange={this.props.onChangeGrade}
                 onBlur={this.props.onBlur}
          />
        </Col>
        <Col span={3}>
          {<Select style={{width: 120}} disabled={this.props.disable} status={this.props.status} defaultValue={'unfinish'}
                   onChange={this.props.onChangeStatus}>
            <Option value='excellent'>优秀</Option>
            <Option value='finish'>完成</Option>
            <Option value='reviewing'>已提交</Option>
            <Option value='unfinish'>未完成</Option>
          </Select>}
        </Col>
      </div>
    )
  }
}

EditStatusBox.propTypes = {
  status:PropTypes.string,
  disable: PropTypes.string.isRequired,
  onChangeGrade: PropTypes.func,
  onChangeStatus:PropTypes.func,
  onBlur:PropTypes.func
}


export default EditStatusBox
