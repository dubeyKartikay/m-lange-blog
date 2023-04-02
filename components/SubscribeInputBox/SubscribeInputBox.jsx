// 'use client';
import styles from "./Subscribe.module.scss";
export default function SubscribeInputBox({identifier,submissionState}) {
  return (
    <div className={styles.sub}>
        <input id={identifier} placeholder=' ' type="text" />    
        <span>Email</span>
        {submissionState == 3 &&<p>*Invalid Email address</p>}
        {submissionState == 4 &&<p>*Internal Server Erorr please try again in a while</p>}
    </div>
  )
}
