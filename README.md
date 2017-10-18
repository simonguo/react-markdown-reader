# markdownloader

## Install

```
npm install html-loader@0.4.5 --save-dev
npm install markdown-loader@0.1.7 --save-dev
npm install markdownloader --save-dev
```


## Usage


`webpack.config.js`

**webpack 1.x**

```js
const markdownLoader = require('markdownloader').renderer;
module.exports={
    ...
    module: {
        [{
            test: /\.md$/,
            loader: 'html!markdown'
        },
        ...
        ]
    },
    markdownLoader
}
```

**webpack 2.x +**

```js
{
  test: /\.md$/,
  use: [{
    loader: 'html-loader'
  }, {
    loader: 'markdown-loader',
    options: {
      pedantic: true,
      renderer: markdownLoader.renderer
    }
  }]
}
```

Exmaple

```js
import { Markdown } from 'markdownloader';
import 'markdownloader/less/highlight.less'


<Markdown>
    {require('./README.md')}
</Markdown>

```

## dependency

- markdown-loader@0.1.7
- html-loader@0.4.5

