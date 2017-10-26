import React, { Component } from 'react'
import { Card, Progress } from 'antd'
import PropTypes from 'prop-types'

class TwsProgressCard extends Component {
  render () {
    return (
      <div>
        <Card noHovering title={this.props.title} onClick={this.props.onClick}>
          <Progress percent={this.props.percent}/>
          {this.props.children}
        </Card>
      </div>
    )
  }
}

TwsProgressCard.defaultProps = {
  percent: 0
}

TwsProgressCard.propTypes = {
  title: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

export default TwsProgressCard