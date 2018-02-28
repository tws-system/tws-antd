import React from 'react'
import { Input, Row, Col } from 'antd'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './code-block'
import '../../../style/react-markdown.css'
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
    this.setState({markdownSrc: evt.target.value}, () => {
      this.props.onChange(this.state.markdownSrc)
    })
  }

  render () {
      const videoTag = this.state.markdownSrc.includes('<video')
      const isEscapeHtml = !videoTag

      return <div className="react-markdown-editor">
      <Row>
        <Col span={12}>
          <div className="editor-pane">
            <TextArea defaultValue={this.state.markdownSrc} onChange={this.handleMarkdownChange}/>
          </div>
        </Col>
        <Col span={12}>
          <div className="result-pane">
            <ReactMarkdown className="markdown-init" source={this.state.markdownSrc} escapeHtml={isEscapeHtml}
                           renderers={{code: CodeBlock}}/>
          </div>
        </Col>
      </Row>
    </div>
  }
}
