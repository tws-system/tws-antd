import React from 'react'
import {Input, Row, Col, Icon} from 'antd'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './code-block'
import MarkdownGuide from './tools/markdown-guide'
import MarkdownUpload from './tools/markdown-upload'
import '../../../style/react-markdown.css'

const {TextArea} = Input

export default class MarkdownEditor extends React.Component {

    constructor(props) {
        super(props)
        this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
        this.state = {
            markdownSrc: this.props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({markdownSrc: nextProps.value})
        }
    }

    handleMarkdownChange(evt) {
        this.setState({markdownSrc: evt.target.value}, () => {
            this.props.onChange(this.state.markdownSrc)
        })
    }

    render() {
        let markdownSrc = this.state.markdownSrc || ''
        const videoTag = markdownSrc.toString().includes('<video')
        const isEscapeHtml = !videoTag

        return <div>
            <Row className='react-markdown-tools'>
                <MarkdownGuide/>
                <MarkdownUpload
                    {...this.props}
                    uploadImageSuccess = {this.props.uploadImageSuccess} />
            </Row>
            <Row className="react-markdown-editor">
                <Col span={12}>
                    <div className="editor-pane">
                        <TextArea value={this.state.markdownSrc} onChange={this.handleMarkdownChange}/>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="result-pane">
                        <ReactMarkdown className="markdown-init" source={this.state.markdownSrc}
                                       escapeHtml={isEscapeHtml}
                                       renderers={{code: CodeBlock}}/>
                    </div>
                </Col>
            </Row>
        </div>
    }
}
