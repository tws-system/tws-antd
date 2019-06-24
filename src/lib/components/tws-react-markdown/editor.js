import React from 'react'
import {Col, Input, Row, Tabs} from 'antd'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './code-block'
import MarkdownGuide from './tools/markdown-guide'
import MarkdownImageUpload from './tools/markdown-image-upload'
import MarkdownFileUpload from './tools/markdown-file-upload'
import '../../../style/react-markdown.css'
import 'github-markdown-css/github-markdown.css'
const {TextArea} = Input
const { TabPane } = Tabs

export default class MarkdownEditor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            markdownSrc: this.props.value || '',
            tabKey: 'edit'
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

    getCursorPosition() {
        let element = window.document.getElementById("markdown-textArea")
        if (!element) {
            return
        }
        return element.selectionStart;
    }

    handleFileUploadSuccess(fileLabel) {
        const {markdownSrc} = this.state
        const currentCursorPosition = this.getCursorPosition()
        const uploadedMarkdownSrc = markdownSrc.substring(0, currentCursorPosition) +fileLabel+ markdownSrc.substring(currentCursorPosition)
        this.handleMarkdownChange(uploadedMarkdownSrc)
    }
    uploadImageSuccess(imagePath) {
        const imageLabel = `\n![](${imagePath})`
        this.handleFileUploadSuccess(imageLabel)
    }

    uploadFileSuccess(fileInfo) {
        const {name, response} = fileInfo
        const fileLabel = `[${name}](${response})`
        this.handleFileUploadSuccess(fileLabel)
    }

    render() {
        let markdownSrc = this.state.markdownSrc || ''
        const videoTag = markdownSrc.toString().includes('<video')
        const isEscapeHtml = !videoTag

        return <div>
          <Tabs onChange={tabKey => this.setState({tabKey})}
                tabBarExtraContent={<Row className='react-markdown-toolbar'>
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
                  <Col className='react-markdown-toolbar__tool'>
                    <MarkdownGuide/>
                  </Col>
                </Row>}
                type="card">
            <TabPane tab="编辑" key="edit">
              <TextArea id='markdown-textArea'
                        autosize={{ minRows: 8}}
                        value={this.state.markdownSrc}
                        onChange={(e) => this.handleMarkdownChange(e.target.value)}/>
            </TabPane>
            <TabPane tab="预览" key="preview">
              <div className="result-pane">
                <ReactMarkdown className=" markdown-body markdown-init" source={this.state.markdownSrc}
                               escapeHtml={isEscapeHtml}
                               renderers={{code: CodeBlock}}/>
              </div>
            </TabPane>
          </Tabs>

        </div>
    }
}
