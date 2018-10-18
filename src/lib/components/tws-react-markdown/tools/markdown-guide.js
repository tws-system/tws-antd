import React from 'react'
import {Icon, Tooltip} from "antd";


const MarkdownGuide = () => {
    return (
        <a href='https://shimo.im/docs/pTYLxwLGfkon8E5Z/'
           target='_blank'>
            <Tooltip title="markdown 使用指南">
                <Icon className='react-markdown-icon' type="question-circle-o"/>
            </Tooltip>
        </a>
    )
}

export default MarkdownGuide