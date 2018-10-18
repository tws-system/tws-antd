import React, { Component } from 'react'
import {Col} from 'antd'
import PropTypes from 'prop-types'
import {convertContent} from '../../contants/lang-util'
class ShowStatusBox extends Component {
  render () {
    return (<div>

        <Col span={3}>
            {convertContent('分数')}：{this.props.grade}
        </Col>
        <Col span={3}>
            {convertContent('状态')}：{this.props.status}
        </Col>
      </div>
    )
  }
}

ShowStatusBox.propTypes = {
  grade: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default ShowStatusBox
