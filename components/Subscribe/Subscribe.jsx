'use client';
import styles from "./Subscribe.module.scss";
import SubscribeInputBox from "../SubscribeInputBox/SubscribeInputBox";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import { useState,createContext } from "react";
const SubmissionStateContext = createContext(null);
export default function Subscribe() {
  const[submissionState,setSubmissonState] = useState(0);
  return (
    <SubmissionStateContext.Provider value={submissionState}>
      <div className={styles.subscribe}>
        <SubscribeInputBox submissionState = {submissionState} identifier={`subscribe`}/>
        <SubscribeButton submissionState={submissionState} setSubmissonState={setSubmissonState} inputFieldId={`subscribe`} />
      </div>
    </SubmissionStateContext.Provider>
  )
}
