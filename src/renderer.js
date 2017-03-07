const marked = require('marked');
const hl = require('highlight.js');

const renderer = new marked.Renderer();

const codeRenderer = function (code, lang) {
    lang = lang === 'js' ? 'javascript' : lang;
    if (lang === 'html') {
        lang = 'xml';
    }

    const hlCode = lang ? hl.highlight(lang, code).value : hl.highlightAuto(code).value;
    return `<div class="doc-highlight"><pre><code class="${lang || ''}">${hlCode}</code></pre></div>`;
};

renderer.code = codeRenderer;

export default {
    renderer: renderer
};
