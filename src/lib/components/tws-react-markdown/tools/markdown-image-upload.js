import React from 'react'
import {Icon, message, Upload} from 'antd';


const MarkdownImageUpload = ({name, action, accept, uploadImageSuccess}) => {
    const props = {
        name: name || 'file',
        accept: accept || 'image/*',
        action: action || '../api/uploadImages/',
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
                uploadImageSuccess(info.file.response)
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

export default MarkdownImageUpload