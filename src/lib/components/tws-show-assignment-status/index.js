import React, { Component } from 'react'
import {Col, Divider} from 'antd'
import PropTypes from 'prop-types'
import {convertContent} from '../../contants/lang-util'
class ShowStatusBox extends Component {
  render () {
    return (<div>

        <span>
            {convertContent('分数')}：{this.props.grade}
        </span>
        <Divider type='vertical'/>
        <span>
            {convertContent('状态')}：{this.props.status}
        </span>
      </div>
    )
  }
}

ShowStatusBox.propTypes = {
  grade: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default ShowStatusBox
