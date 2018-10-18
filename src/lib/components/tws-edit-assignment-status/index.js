import React, { Component } from 'react'
import { Input, Col} from 'antd'
import PropTypes from 'prop-types'
import {convertContent} from '../../contants/lang-util'

class EditStatusBox extends Component {

  render () {
    return (<div>
        <Col span={3}>
          <Input addonBefore={convertContent('分数' )} defaultValue={'0'} value={this.props.grade} style={{width: 120}} disabled={this.props.disabled}
                 onChange={this.props.onChangeGrade}
                 onBlur={this.props.onBlur}
          />
        </Col>
        <Col span={3}>
            <p style={{width: 120}}>{convertContent('状态' )}：{this.props.status} </p>
        </Col>
      </div>
    )
  }
}

EditStatusBox.propTypes = {
  status:PropTypes.string,
  disabled: PropTypes.bool,
  onChangeGrade: PropTypes.func,
  onBlur:PropTypes.func
}


export default EditStatusBox
