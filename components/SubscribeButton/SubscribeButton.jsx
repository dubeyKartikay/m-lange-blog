'use client';
import styles from "./SubscribeButton.module.scss";
import Button from "../Button/Button";
export default function SubscribeButton() {
  const handleSubmit = ()=>{
    
  }

  return (
    <div>
    <Button onClick={handleSubmit } text = "Subscribe" />
    </div>
  )
}
