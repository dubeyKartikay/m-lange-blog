'use client';
import styles from "../../styles/app/contact/page.module.scss";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    let { email, text } = event.target;
    email = email.value;
    text = text.value;


    console.log(text);


    fetch('/api/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        text: text,
        subject :"Contact Form submission"
      }
      )
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  return (
    <div className={styles.page}>
      <h1>Contact</h1>
      <form className={styles.form} onSubmit={handleSubmit} action="">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="john.doe@gmail.com" />
        <label htmlFor="text">Message</label>
        <textarea type="text" name="text" id="text" placeholder="Your message" />
        <button type="submit">
          <div className={styles.btn}><Button text="Submit" /></div>
        </button>
      </form>
      <Footer/>
    </div>
  )
}
