import MarkdownIt from "markdown-it";
import mathjax3 from "markdown-it-mathjax3";
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
  md.use(mathjax3);
  let res = md.render(props.content);
  return (<div dangerouslySetInnerHTML={{__html:res}} className={styles.contentDiv}></div>);
}
