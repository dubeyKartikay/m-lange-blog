import connect from "../../lib/mongoDb/connect";
import HighlightedBlog from "../HighlightedBlog/HighlightedBlog";
import styles from "./NewSection.module.scss";
import Link from "next/link";
export default async function NewSection() {
  const res = await getBlogsMetaData();
  const arr = await res.map((ele) => {
    return <Link key={ele._id} href = {`/blog/${ele._id}`} > <HighlightedBlog  {...ele} /></Link> 
    } ).toArray();
  console.log(arr);
  console.log(res);
  return (
    <div className={styles.newSection}>
      {/* <div className={styles.newSectionText} >New</div> */}
      <div className={styles.content}>
        {arr}
      </div>
    </div>
  )
}
async function getBlogsMetaData() {
  const collection = await connect();

  const res = collection.find().sort({ "date": -1 }).limit(4);
  return res;
}

