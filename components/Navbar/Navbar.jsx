import styles from "./Navbar.module.scss";
import Image from "next/image";
import avatar from "../../public/Avatar.png";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Link legacyBehavior href="/">
        <a >
          <Image
            alt="Dubey Kartikay's avatar"
            src={avatar}
            placeholder="blur"
            className={styles.avatar}
          />
        </a>
      </Link>
      <ul>
        <Link className={styles.contact} href="/contact">
          Contact • संपर्क
        </Link>
      </ul>
    </div>
  );
}
