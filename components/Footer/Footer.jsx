import styles from "./Footer.module.scss";
import GitHub from "../../public/github.svg"
import Instagram from "../../public/instagram.svg"
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.footer} >
      <a href="https://github.com/dubeyKartikay">
        <Image className={styles.icon} src={GitHub} alt ="Github Icon" />
      </a>
      <a href="https://www.instagram.com/dubeykartikay/">
        <Image className={styles.icon} src={Instagram} alt = "Instagram Icon" />
      </a>
    </div>
  )
}
