import React from 'react';
import ReactDOM from 'react-dom';

import Markdown from '../src/Markdown';
import '../less/highlight.less';

const App = () => {
  return <Markdown>{require('../README.md')}</Markdown>;
};

ReactDOM.render(<App />, document.getElementById('app'));
