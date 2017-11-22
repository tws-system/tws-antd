import React, {Component} from 'react';
import {TwsProgressCard, TwsMarkdownEditor,TwsBelongTask} from '../lib';

class App extends Component {
  render() {
    return (
      <div>
        <TwsMarkdownEditor value="aaa"></TwsMarkdownEditor>
        <TwsProgressCard title="aaa" percent={10} onClick={console.log} />
        <TwsBelongTask title="所属任务卡">aaaaaa</TwsBelongTask>
      </div>
    )
  }
}

export default App;
