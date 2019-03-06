import React, {Component} from 'react'
import {Input, Col, Divider} from 'antd'
import PropTypes from 'prop-types'
import {convertContent} from '../../contants/lang-util'

class EditStatusBox extends Component {

  render() {
    return (<div>
        <Input addonBefore={convertContent('分数')} defaultValue={'0'} value={this.props.grade} style={{width: 120}}
               disabled={this.props.disabled}
               onChange={this.props.onChangeGrade}
               onBlur={this.props.onBlur}
        />
        <Divider type='vertical'/>
        <span style={{display:'inline-block', lineHeight:2.2}}>{convertContent('状态')}：{this.props.status} </span>
      </div>
    )
  }
}

EditStatusBox.propTypes = {
  status: PropTypes.string,
  disabled: PropTypes.bool,
  onChangeGrade: PropTypes.func,
  onBlur: PropTypes.func
}


export default EditStatusBox
