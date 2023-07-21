import connect from "../../lib/mongoDb/connect";
import HighlightedBlog from "../HighlightedBlog/HighlightedBlog";
import styles from "./NewSection.module.scss";
import Link from "next/link";
export default async function NewSection({type}) {
  const res = await getBlogsMetaData(type);
  const arr = await res.map((ele) => {
    return <Link key={ele._id} href = {`/blog/${ele._id}`} > <HighlightedBlog  {...ele} /></Link> 
    } ).toArray();
    res.close()
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
async function getBlogsMetaData(type) {
  const {collection} = await connect(type);

  const res = collection.find().sort({ "date": -1 }).limit(4);
  return res;
}

