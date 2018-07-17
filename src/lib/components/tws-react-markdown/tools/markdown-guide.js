import React from 'react'
import {Icon, Tooltip} from "antd";


const MarkdownGuide = () => {
    return (
        <a href='https://school.thoughtworks.cn/bbs/topic/1180/%E8%AE%AD%E7%BB%83%E8%90%A5%E7%B3%BB%E7%BB%9F-markdown-%E4%BD%BF%E7%94%A8'
           target='_blank'>
            <Tooltip title="markdown 使用指南">
                <Icon className='react-markdown-icon' type="question-circle-o"/>
            </Tooltip>
        </a>
    )
}

export default MarkdownGuide