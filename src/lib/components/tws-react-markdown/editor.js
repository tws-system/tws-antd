import React from 'react'
import {Col, Input, Row} from 'antd'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './code-block'
import MarkdownGuide from './tools/markdown-guide'
import MarkdownImageUpload from './tools/markdown-image-upload'
import MarkdownFileUpload from './tools/markdown-file-upload'
import '../../../style/react-markdown.css'

const {TextArea} = Input

export default class MarkdownEditor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            markdownSrc: this.props.value || ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({markdownSrc: nextProps.value})
        }
    }

    handleMarkdownChange(markdownSrc) {
        this.setState({markdownSrc}, () => {
            this.props.onChange(this.state.markdownSrc)
        })
    }

    uploadImageSuccess(imagePath) {
        const imageLabel = `\n![](${imagePath})`
        const {markdownSrc} = this.state
        this.handleMarkdownChange(markdownSrc + imageLabel)
    }

    uploadFileSuccess(filePath) {
        const fileLabel = `[](${filePath})`
        const {markdownSrc} = this.state
        this.handleMarkdownChange(markdownSrc + fileLabel)
    }
    render() {
        let markdownSrc = this.state.markdownSrc || ''
        const videoTag = markdownSrc.toString().includes('<video')
        const isEscapeHtml = !videoTag

        return <div>
            <Row className='react-markdown-toolbar'>
                <Col className='react-markdown-toolbar__tool'>
                    <MarkdownGuide/>
                </Col>
                <Col className='react-markdown-toolbar__tool'>
                    <MarkdownImageUpload
                        {...this.props}
                        uploadImageSuccess={this.uploadImageSuccess.bind(this)}/>
                </Col>
                <Col className='react-markdown-toolbar__tool'>
                    <MarkdownFileUpload
                    {...this.props}
                    uploadFileSuccess={this.uploadFileSuccess.bind(this)}/>
                </Col>
            </Row>
            <Row className="react-markdown-editor">
                <Col span={12}>
                    <div className="editor-pane">
                        <TextArea value={this.state.markdownSrc}
                                  onChange={(e) => this.handleMarkdownChange(e.target.value)}/>
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
