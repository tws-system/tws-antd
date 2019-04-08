import React, { Component } from 'react'
import { Dropdown, Icon, Menu } from 'antd'

const language = {
  'zh': '中文简体',
  'zh_TW': '中文繁體',
  'en': 'English'
}
export default class LanguageButtons extends Component {
  changeLang (evt) {
    const lang = evt.key
  }

  getLang () {
    return 'zh'
  }

  render () {
    const menu = (
      <Menu onClick={this.changeLang.bind(this)}>
        <Menu.Item key='zh' >
          {language.zh}
        </Menu.Item>
        <Menu.Item key='zh_TW'>
          {language.zh_TW}
        </Menu.Item>
        <Menu.Item key='en'>
          {language.en}
        </Menu.Item>
      </Menu>
    )

    return <div style={{float: 'right'}}>
      <Dropdown overlay={menu}>
        <a className='ant-dropdown-link'  href='javascript:(0)'>
          {language[this.getLang()]}<Icon type='down' />
        </a>
      </Dropdown>
    </div>
  }
}
