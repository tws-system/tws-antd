import React from 'react'
import {Radio} from 'antd'

export default ({lang, changeLocale}) => {

    return <Radio.Group  size='small' value={lang} onChange={changeLocale}>
        <Radio.Button   key='zh' value='zh'>简体</Radio.Button>
        <Radio.Button  key='zh_TW' value='zh_TW'>繁体</Radio.Button>
    </Radio.Group>

}