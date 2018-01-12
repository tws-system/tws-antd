import React, { Component } from 'react'
import {
  TwsProgressCard,
  TwsMarkdownEditor,
  TwsBelongTask,
  TwsLayout,
  TwsSection,
  TwsReactMarkdownPreview,
  TwsReactMarkdownEditor
} from '../lib'
import logo from '../lib/images/logo-white.png'

const initialSource = `
# Live demo
Changes are automatically rendered as you type.
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below
> This blockquote will change based on the HTML settings above.


## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`
Pretty neat, eh?
## Tables?
| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal

<video width="100%" id="video" controls="" preload="auto" poster="">
      <source id="mp4" src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4">
      <p>抱歉，你的浏览器不支持在线视频播放。</p >
</video>


<iframe width="560" height="315" src="https://www.youtube.com/embed/fK_zwl-lnmc" frameborder="0" allowfullscreen>
</iframe>
    
`

class App extends Component {
  render () {
    return (
      <div>
        <TwsMarkdownEditor value="aaa"></TwsMarkdownEditor>
        <TwsProgressCard title="aaa" percent={10} onClick={console.log}/>
        <TwsBelongTask title="所属任务卡">aaaaaa</TwsBelongTask>
        <TwsLayout userName='zhang三' lang='en' logo={logo} onChange={console.log} logoutUrl={'jjjfdsjk'}
                   userCenterHomeUrl={'bbbbbbbb'}>
          {'vvvv'}
        </TwsLayout>
        <TwsSection taskType="选修" topicTitle="topicsfjddddfasjkkkkkkkkdddddddddddddddddddddddddddl" taskTitle="tnvjvj"
                    color={'red'}/>

        <TwsReactMarkdownPreview source={initialSource}/>
        <TwsReactMarkdownEditor value={initialSource}/>
      </div>
    )
  }
}

export default App
