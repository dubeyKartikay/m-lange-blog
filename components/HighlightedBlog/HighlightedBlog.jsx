import styles from "./HighlightedBlog.module.scss";
import Image from "next/image";
import timeImg from "../../public/time.png";
import Link from "next/link";
export default function HighlightedBlog({ _id, heading, subHeading, readingTime, date, views, likes, img }) {
  return (
    <div className={styles.highBlog} >
      <div className={styles.imgContainer}>
        <Link href={`/blog/${_id}`}>
          <Image className={styles.img} src={`https://raw.githubusercontent.com/dubeyKartikay/blog/master/images/${_id.toString().split(".")[0]}.png`} width={500} height={300} alt="Image associated to the Blog" />
        </Link>
      </div>
      <div className={styles.content}>
        <p style={{ "opacity": 0.8 }}>{date.toDateString()}</p>
        <h1>
          <Link href={`/blog/${_id}`}>
            {heading}
          </Link>
        </h1>
        <div className={styles.readTimeDiv}>
          <div> <Image className={styles.timeImg} src={timeImg} alt="icon for an alarm clock" />  </div>
          <div>{readingTime}</div>
        </div>
        <div>
          {subHeading}
        </div>
      </div>
    </div>
  )
}
