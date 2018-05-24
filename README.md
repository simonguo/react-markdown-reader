# react-markdown-reader

## Install

```
npm install html-loader --save-dev
npm install markdown-loader --save-dev
npm install react-markdown-reader --save-dev
```

## Usage

`webpack.config.js`

**webpack >= 2**

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
      renderer: markdownRenderer(/**languages[string]**/)
    }
  }]
}
```

注意： markdownRenderer 参数 languages，是为了按需加载，解决加载所有的语言包文件过大的问题。默认值:

```js
["javascript", "bash", "xml", "css", "markdown", "less"];
```

Exmaple

```js
import { Markdown } from 'react-markdown-reader';
import 'markdownloader/less/highlight.less'


<Markdown>
    {require('./README.md')}
</Markdown>
```
