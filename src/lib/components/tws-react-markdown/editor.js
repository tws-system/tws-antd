import React from 'react'
import {Input, Row, Col, Icon, Tooltip} from 'antd'
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
      const markdownSrc = this.state.markdownSrc || ''
      const videoTag = markdownSrc.includes('<video')
      const isEscapeHtml = !videoTag

      return <div >
          <div className='react-markdown-tools'>
                  <a href='https://school.thoughtworks.cn/bbs/topic/1180/%E8%AE%AD%E7%BB%83%E8%90%A5%E7%B3%BB%E7%BB%9F-markdown-%E4%BD%BF%E7%94%A8' target='_blank'>
                      <Icon className='react-markdown-icon' type="question-circle-o" />
                  </a>
          </div>
      <Row className="react-markdown-editor">
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
