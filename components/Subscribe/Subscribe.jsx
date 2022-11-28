// 'use client';
import styles from "./Subscribe.module.scss";
export default function Subscribe() {
  return (
    <div className={styles.sub}>
        <input id="subscribe" placeholder=' ' type="text" />    
        <span>Email</span>
    </div>
  )
}
