import React, {Component} from 'react';
import {TwsProgressCard, TwsMarkdownEditor,TwsBelongTask,TwsLayout,TwsSection} from '../lib';
import logo from '../lib/images/logo-white.png'

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
        <TwsSection taskType="选修" topicTitle="topicsfjddddfasjkkkkkkkkdddddddddddddddddddddddddddl" taskTitle="task狂热我日风景库胸444444任务炯认为违法和体育房价大搜ID骄傲发嗲少放点 房间大搜IE日日日绕付军翁热豆腐军诶偶二奥无无付几苏多付付付发二多付话地所" sectionDescription="description到发死偶风二二二付晕或无求二二二付或一无二付多或撒与撒啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊" color={"red"}/>
      </div>
    )
  }
}

export default App;
