# markdownloader

## Usage


`webpack.config.js`

```js
const markdownLoader = require('markdownloader');


module.exports={
    ...
    markdownLoader
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

