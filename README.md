# react-markdown-reader

## Install

```
npm install html-loader --save-dev
npm install markdown-loader --save-dev
npm install react-markdown-reader --save-dev
```

## Usage


`webpack.config.js`

**webpack 2.x +**


```js

const markdownRenderer = require('react-markdown-reader').renderer;

{
  test: /\.md$/,
  use: [{
    loader: 'html-loader'
  }, {
    loader: 'markdown-loader',
    options: {
      pedantic: true,
      renderer: markdownRenderer
    }
  }]
}
```

Exmaple

```js
import { Markdown } from 'react-markdown-reader';
import 'markdownloader/less/highlight.less'


<Markdown>
    {require('./README.md')}
</Markdown>

```
