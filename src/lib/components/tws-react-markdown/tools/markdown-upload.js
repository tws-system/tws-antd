import React from 'react'
import {Upload, message, Icon} from 'antd';


const MarkdownUpload = ({name, action, accept}) => {
    const props = {
        name: name || 'file',
        accept: accept || 'image/*',
        action,
        beforeUpload(file){
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Image must smaller than 2MB!');
                return false
            }
        },
        onChange(info) {
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                this.props.uploadImageSuccess(info)
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },

    };
    return (
        <Upload {...props}>
            <Icon className='react-markdown-icon' type="picture"/>
        </Upload>
    )
}

export default MarkdownUpload