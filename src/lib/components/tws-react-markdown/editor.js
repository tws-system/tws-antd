import React from 'react'
import {Input, Row, Col, Icon} from 'antd'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './code-block'
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

    componentWillReceiveProps (nextProps) {
        if(nextProps.value !== this.props.value) {
            this.setState({markdownSrc : nextProps.value})
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
            <Row>
                <Col span={24}>
                    <div className='react-markdown-tools'>
                        <a href='https://school.thoughtworks.cn/bbs/topic/1180/%E8%AE%AD%E7%BB%83%E8%90%A5%E7%B3%BB%E7%BB%9F-markdown-%E4%BD%BF%E7%94%A8'
                           target='_blank'>
                            <Icon className='react-markdown-icon' type="question-circle-o"/>
                        </a>
                    </div>
                </Col>
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
