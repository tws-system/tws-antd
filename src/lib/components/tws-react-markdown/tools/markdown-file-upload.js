import React from 'react'
import {Icon, message, Upload} from 'antd';


const MarkdownFileUpload = ({name, action,  uploadFileSuccess}) => {
    const props = {
        name: name || 'file',
        action: action || '../api/uploadFile/',
        beforeUpload(file){
            const isLt5M = file.size / 1024 / 1024 > 5;
            if (isLt5M) {
                message.error('Image must smaller than 5MB!');
                return false
            }
        },
        onChange(info) {
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                uploadFileSuccess(info.file)
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },

    };
    return (
        <Upload {...props}>
            <Icon className='react-markdown-icon' type="cloud-upload" theme="outlined" />
        </Upload>

    )
}

export default MarkdownFileUpload