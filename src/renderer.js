const marked = require("marked");
const hl = require("highlight.js/lib/highlight");
const defalutLanguages = [
  "javascript",
  "bash",
  "xml",
  "css",
  "markdown",
  "less"
];

export default (languages = defalutLanguages) => {
  languages.forEach(langName => {
    let langModule = require(`highlight.js/lib/languages/${langName}`);
    hl.registerLanguage(langName, langModule);
  });

  const renderer = new marked.Renderer();
  const codeRenderer = function(code, lang) {
    lang = lang === "js" ? "javascript" : lang;
    if (lang === "html") {
      lang = "xml";
    }

    const hlCode = lang
      ? hl.highlight(lang, code).value
      : hl.highlightAuto(code).value;
    return `<div class="doc-highlight"><pre><code class="${lang ||
      ""}">${hlCode}</code></pre></div>`;
  };

  renderer.code = codeRenderer;

  return renderer;
};
