import React, {Component} from 'react';
import {TwsProgressCard, TwsMarkdownEditor,TwsBelongTask,TwsLayout,TwsSection,TwsReactMarkdownPreview} from '../lib';
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
`


class App extends Component {
  render() {
    return (
      <div>
        <TwsMarkdownEditor value="aaa"></TwsMarkdownEditor>
        <TwsProgressCard title="aaa" percent={10} onClick={console.log} />
        <TwsBelongTask title="所属任务卡">aaaaaa</TwsBelongTask>
        <TwsLayout userName='zhang三' lang='en' logo={logo} onChange={console.log} logoutUrl={'jjjfdsjk'} userCenterHomeUrl={'bbbbbbbb'}>
          {"vvvv"}
        </TwsLayout>
        <TwsSection taskType="选修" topicTitle="topicsfjddddfasjkkkkkkkkdddddddddddddddddddddddddddl" taskTitle="tnvjvj" color={"red"}/>

        <TwsReactMarkdownPreview source={initialSource}/>
      </div>
    )
  }
}

export default App;
