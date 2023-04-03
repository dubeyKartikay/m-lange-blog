import connect from "../../lib/mongoDb/connect";
import HighlightedBlog from "../HighlightedBlog/HighlightedBlog";
import styles from "./NewSection.module.scss";
import Link from "next/link";
export default async function NewSection() {
  const collection = await connect();

  const res =  collection.find().sort({"date": -1}).limit(4);
  const arr = await res.map((ele) => {
    return  <HighlightedBlog key={ele._id} {...ele} />
    } ).toArray();
    await new Promise(r => setTimeout(r, 1000));
  // console.log(arr);
  // console.log(res);
  return (
    <div className={styles.newSection}>
      {/* <div className={styles.newSectionText} >New</div> */}
      <div className={styles.content}>
        {arr}
      </div>
    </div>
  )
}
