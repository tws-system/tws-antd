import React from 'react'
import { Input, Row, Col } from 'antd'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './code-block'
const {TextArea} = Input

export default class MarkdownEditor extends React.Component {

  constructor (props) {
    super(props)

    this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
    this.state = {
      markdownSrc: this.props.value
    }
  }

  handleMarkdownChange (evt) {
    this.setState({markdownSrc: evt.target.value})
  }

  render () {
    return <div className="react-markdown-editor">
      <Row>
        <Col span={12}>
          {/*<TextArea rows={8} defaultValue={this.props.value} onChange={this.props.onChange}/>*/}

          <TextArea defaultValue={this.state.markdownSrc} onChange={this.handleMarkdownChange}/>
        </Col>
        <Col span={12}>
          <ReactMarkdown className="markdown-init" source={this.state.markdownSrc} escapeHtml={false} renderers={{code: CodeBlock}}/>
        </Col>
      </Row>
    </div>
  }
}
