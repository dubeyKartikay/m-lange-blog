'use client';
import styles from "./SubscribeButton.module.scss";
import Button from "../Button/Button";
export default function SubscribeButton({inputFieldId}) {
  const validateEmail = (mail) =>{
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)){
      return true
    }
    return false
  }
  
  
  
  
  const handleSubmit = ()=>{
    const email = document.getElementById(inputFieldId).value;
    console.log(email)  ;
    if(!validateEmail(email)){
      alert("wrong Email address");
    }else{
      
    }

  }

  


  return (
    <div>
    <Button onClick={handleSubmit } text = "Subscribe" />
    </div>
  )
}
