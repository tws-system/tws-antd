import React, { Component } from 'react'
import PropTypes from 'prop-types'

import "../../../style/index.css"
class TwsBelongTask extends Component {
  render () {
    return (
      <div className='margin-t-3'>
        <h3>{this.props.title}</h3>
        <div className='margin-t-2'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

TwsBelongTask.propTypes = {
  title: PropTypes.string.isRequired
}
export default TwsBelongTask