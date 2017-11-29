import React, {Component} from 'react';
import {TwsProgressCard, TwsMarkdownEditor,TwsBelongTask,TwsLayout,TwsSection} from '../lib';

class App extends Component {
  render() {
    return (
      <div>
        <TwsMarkdownEditor value="aaa"></TwsMarkdownEditor>
        <TwsProgressCard title="aaa" percent={10} onClick={console.log} />
        <TwsBelongTask title="所属任务卡">aaaaaa</TwsBelongTask>
        <TwsLayout userName='zhang三' lang='en' onChange={console.log}>
          {"vvvv"}
        </TwsLayout>
        <TwsSection taskType="选修" topicTitle="topic" taskTitle="task" sectionDescription="description" color={"red"}/>
      </div>
    )
  }
}

export default App;
