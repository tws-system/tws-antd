import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './code-block'
import '../../../style/react-markdown.css'

class TwsReactMarkdownPreview extends Component {
  render () {
    return (
      <ReactMarkdown className="markdown-init" source={this.props.source} escapeHtml={false}
                     renderers={{code: CodeBlock}}/>
    )
  }
}

export default TwsReactMarkdownPreview