import React, {Component} from 'react';
import {TwsProgressCard, TwsMarkdownEditor} from '../lib';

class App extends Component {
  render() {
    return (
      <div>
        <TwsMarkdownEditor value="aaa"></TwsMarkdownEditor>
        <TwsProgressCard title="aaa" percent={10} onClick={console.log} />
      </div>
    )
  }
}

export default App;
