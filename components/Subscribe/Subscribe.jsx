import styles from "./Subscribe.module.scss";
import SubscribeInputBox from "../SubscribeInputBox/SubscribeInputBox";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
export default function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <SubscribeInputBox identifier={`subscribe`}/>
      <SubscribeButton inputFieldId={`subscribe`} />
    </div>
  )
}
