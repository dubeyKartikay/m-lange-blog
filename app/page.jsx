import styles from "../styles/app/page.module.scss";
import Subscribe from "../components/Subscribe/Subscribe";
export default function Page() {
  return (
    <div className={styles.page}>
      <h1>Hello, Next.js!</h1>
      <Subscribe/>
    </div>
  );
}
