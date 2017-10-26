import React, { Component } from 'react'

const DEFAULT_HEIGHT = 600
const IFRAME_STYLE = {width: '100%', overflow: 'hidden', border: 'none'}

export default class TwsMarkdownEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: DEFAULT_HEIGHT
    }
  }

  sendMessageToEditorFrame (message) {
    this.editorMDFrame.contentWindow.postMessage(
      Object.assign({}, message, {uuid: this.uuid}), '*'
    )
  }

  handleMessage (message) {
    if (message.data.uuid !== this.uuid) {
      return
    }
    switch (message.data.type) {
      case 'markDown': {
        if (this.props.onUpdate) {
          this.props.onUpdate(message.data.value)
        }
        break
      }

      case 'height': {
        this.setState({height: message.data.value + 32})
        break
      }

      default: {
        console.log(message)
      }
    }
  }

  handleMDFrameLoad () {
    const {preview} = this.props
    const {height} = this.state
    this.sendMessageToEditorFrame({
      type: 'init',
      defaultValue: this.props.defaultValue,
      options: Object.assign({preview, height})
    })
  }

  componentDidMount () {
    window.addEventListener('message', this.handleMessage.bind(this), false)
    this.editorMDFrame.onload = this.handleMDFrameLoad.bind(this)
    this.uuid = parseInt(Math.random() * 10000)
  }

  render () {
    return (
      <div className='tws-markdown-editor'>
        <iframe title='markdown' ref={(ref) => { this.editorMDFrame = ref }} scrolling='no' src='./editor-md/examples/simple.html'
                style={Object.assign({}, IFRAME_STYLE, {height: this.state.height})}/>
      </div>
    )
  }
}
