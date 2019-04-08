import React, {Component} from 'react'
import {
  TwsProgressCard,
  TwsBelongTask,
  TwsLayout,
  TwsSection,
  TwsEditAssignmentStatus,
  TwsShowAssignmentStatus,
  TwsReactMarkdownPreview,
  TwsReactMarkdownEditor
} from '../lib'
import logo from '../lib/images/tw-logo-white-new.png'
import OrganizationSelectBox from "../lib/components/tws-organization/tws-organization-select-box";

const initialSource = `
<a>asd</a>
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
    
`
const organizations = [{id:1,title:'特别特币长的啊啊'}, {id:2,title:'test2'}]
class App extends Component {

  getValue(value) {
    console.log(value, 'mmmmm')
  }

  handleOnClick(notificationId) {
    console.log('notificationId', notificationId)
  }

  render() {
    const notifications = [{
      id: 1,
      createTime: '2018-08-09',
      message: "助教 马欢欢 关注了你 微信：MH12312 手机号：15802953789 QQ：863729374 赶快去联系他吧",
      url: "https://school.thoughtworks.cn/learn/program-center/subjectiveQuiz/index.html#/student/program/21/task/79/assignment/156/quiz/95"
    },
      {
        id: 2,
        createTime: '2018-08-19',
        message: "助教 司鑫 关注了你 微信：MH12312 手机号：13802953789 QQ：263729374 赶快去联系他吧",
        url: "https://school.thoughtworks.cn/learn/program-center/student/index.html#/student/program/21/task/79"
      },
      {id: 3, createTime: '2018-08-19', message: "助教 司鑫 关注了你 微信：MH12312 手机号：13802953789 QQ：263729374 赶快去联系他吧", url: ""}]
    return (
      <div>
        <TwsLayout user={{currentOrganizationId:1,userName:'zhang三'}}
                   lang='en'
                   organizations={organizations}
                   logo={logo} onChange={console.log} logoutUrl={'jjjfdsjk'}
                   userCenterHomeUrl={'bbbbbbbb'}
                   notifications={notifications}
                   moreUrl={'http://localhost:3000/'}
                   handleOnClick={this.handleOnClick.bind(this)}>
          {'测试'}
        </TwsLayout>
        <OrganizationSelectBox organizations={organizations}
                               user={{currentOrganizationId:1}}/>
        {/*<TwsMarkdownEditor value="aaa"></TwsMarkdownEditor>*/}
        <TwsReactMarkdownEditor value={initialSource} onChange={this.getValue.bind(this)}/>
        <TwsProgressCard title="aaa" percent={10} onClick={console.log}/>
        <TwsBelongTask title="所属任务卡">aaaaaa</TwsBelongTask>

        <TwsSection taskType="选修" topicTitle="topicsfjddddfasjkkkkkkkkdddddddddddddddddddddddddddl" taskTitle="tnvjvj"
                    color={'red'}/>

        <TwsEditAssignmentStatus status='已提交' disabled/>
        <TwsShowAssignmentStatus/>
        <TwsReactMarkdownPreview source={initialSource}/>

      </div>
    )
  }
}

export default App
