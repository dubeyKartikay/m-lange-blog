'use client';
import styles from "./SubscribeButton.module.scss";
import Button from "../Button/Button";
import { useContext } from "react";
import Image from "next/image";
import Tick from "../../public/tick.svg";
import Cross from "../../public/cross.png";
import ReactLoading from 'react-loading';
export default function SubscribeButton({ inputFieldId, setSubmissonState, submissionState }) {
  const validateEmail = (mail) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return true
    }
    return false
  }




  const handleSubmit = () => {
    setSubmissonState(1);
    const email = document.getElementById(inputFieldId).value;
    // console.log(email)  ;
    if (!validateEmail(email)) {
      setSubmissonState(3);
      setTimeout(() => { setSubmissonState(0) }, 2000);
    } else {
      fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSubmissonState(2);
          setTimeout(() => { setSubmissonState(0) }, 2000);
        })
        .catch(error => {
          setSubmissonState(4);
          setTimeout(() => { setSubmissonState(0) }, 2000);
          console.error(error)
        });
    }

  }


  return (
    <div className={styles.btnDiv}>
      {submissionState == 0 && <Button onClick={handleSubmit} text="Subscribe" />}
      {submissionState == 1 && <ReactLoading type={`spin`} color={`#D15A54`} height={40} width={40} />}
      {submissionState == 2 && <Image src={Tick} alt="Suscess" className={styles.tick} />}
      {submissionState > 2 && <Image src={Cross} alt="Suscess" className={styles.tick} />}
    </div>
  )
}
