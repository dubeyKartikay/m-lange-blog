'use client';
import styles from "./Navbar.module.scss";
import Image from "next/image";
import avatar from "../../public/Avatar.png";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isMenuClosed,setMenu] = useState(false);
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
      <div onClick={()=>{setMenu(!isMenuClosed)}} className={styles.toggle}>
          <div className={ `${styles.line1_open} ${isMenuClosed ? styles.line1_close :''}`} ></div>
          <div className={ `${styles.line2_open} ${isMenuClosed ? styles.line2_close :''}`} ></div>
          <div className={ `${styles.line3_open} ${isMenuClosed ? styles.line3_close :''}`} ></div>
      </div>
      <ul className={`${styles.navlinksContainer} ${isMenuClosed ? styles.navlinksContainer_show : ''}`}>
        
        <Link className={styles.contact} href="/editorials/1">
          Editorials
        </Link>
        <Link className={styles.contact} href="/devlogs/1">
          Dev logs
        </Link>
        <Link className={styles.contact} href="/gamedes/1">
          Game Design
        </Link>
        <Link className={styles.contact} href="/contact">
          Contact • संपर्क
        </Link>
      </ul>
    </div>
  );
}
