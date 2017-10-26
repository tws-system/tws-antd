import React from 'react';
import {TwsProgressCard} from '../lib';

const App = () => (
  <div>
    <TwsProgressCard title="aaa" percent={10} onClick={console.log} />
  </div>
);

export default App;
