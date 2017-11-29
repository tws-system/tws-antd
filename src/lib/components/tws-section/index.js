import React, { Component } from 'react'
import { Col,Row,Icon} from 'antd'
import PropTypes from 'prop-types'
import "../../../style/section.css"
import "../../../style/index.css"

class TwsSection extends Component {
  render () {

    return (<Col className='gutter-row margin-b-3' span={9}>
      <Row onClick={this.props.onClick}>
        <Col span={2}>
          <div className='section-header-footer section-style'>
            {this.props.taskType}
          </div>
        </Col>
        <Col span={18}>
          <div className='section-style'>
            {this.props.topicTitle + ' / ' + this.props.taskTitle + ' / ' + this.props.sectionDescription}
          </div>
        </Col>
        <Col span={4}>
          <div className='section-header-footer section-style'>
            <Icon type='star' style={{fontSize: 30, color: this.props.color}}/>
          </div>
        </Col>
      </Row>
    </Col>)
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