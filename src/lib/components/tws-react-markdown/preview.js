import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './code-block'
import '../../../style/react-markdown.css'
import 'github-markdown-css/github-markdown.css'
class TwsReactMarkdownPreview extends Component {
  render () {
    const markdownSrc = this.props.source || ''
    const videoTag = markdownSrc.includes('<video')
    const isEscapeHtml = !videoTag

    return (
      <ReactMarkdown className="markdown-init" source={this.props.source} escapeHtml={isEscapeHtml}
                     renderers={{code: CodeBlock}}/>
    )
  }
}

export default TwsReactMarkdownPreview