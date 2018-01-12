import React from 'react'
import { Input } from 'antd'
const { TextArea } = Input

export default class MarkdownEditor extends React.Component {
  render () {
    return <TextArea rows={8} defaultValue={this.props.value} onChange={this.props.onChange}/>
  }
}
