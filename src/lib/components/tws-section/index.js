import React, { Component } from 'react'
import { Col,Row,Icon} from 'antd'
import PropTypes from 'prop-types'
import "../../../style/section.css"
import "../../../style/index.css"

class TwsSection extends Component {
  render () {
    return (
      <Row onClick={this.props.onClick}>
        <Col span={4}>
          <div className='section-header section-style'>
            {this.props.taskType}
          </div>
        </Col>
        <Col span={16}>
          <div className='section-style section-content'>
	          <p>{this.props.topicTitle}</p>
	          <p>{this.props.taskTitle + ' / ' + this.props.sectionDescription}</p>
          </div>
        </Col>
        <Col span={4}>
          <div className='section-footer section-style'>
            <Icon type='star' theme='filled' style={{fontSize: 30, color: this.props.color}}/>
          </div>
        </Col>
      </Row>
    )
  }
}

TwsSection.propTypes = {
  taskType: PropTypes.string.isRequired,
  topicTitle: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  sectionDescription: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default TwsSection