import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/app/page.module.scss";
import SubscribeButton from "../components/SubscribeButton/SubscribeButton";
import Subscribe from "../components/Subscribe/Subscribe";
export default function Page() {
  return (
    <div className={styles.page}>
      <h1>Hello, Next.js!</h1>
      <Subscribe identifier={`subscribe`}/>
      <SubscribeButton inputFieldId={`subscribe`} />
    </div>
  );
}
