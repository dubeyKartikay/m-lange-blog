// 'use client';
import styles from "./Subscribe.module.scss";
export default function SubscribeInputBox({identifier}) {
  return (
    <div className={styles.sub}>
        <input id={identifier} placeholder=' ' type="text" />    
        <span>Email</span>
    </div>
  )
}
