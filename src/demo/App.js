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
        <TwsSection taskType="选修" topicTitle="topic" taskTitle="task" sectionDescription="description" color={"red"}/>
      </div>
    )
  }
}

export default App;
