import MarkdownIt from "markdown-it";
import markdownItMathjax from "markdown-it-mathjax";
import styles from "./Markdown.module.scss"
import hljs from "highlight.js";
export default function Markdown(props) {
  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }
  
      return ''; // use external default escaping
    }
  });
  md.use(new markdownItMathjax());
  let res = md.render(props.content);
  return (<div dangerouslySetInnerHTML={{__html:res}} className={styles.contentDiv}></div>);
}
