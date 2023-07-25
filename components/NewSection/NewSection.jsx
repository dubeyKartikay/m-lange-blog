import connect from "../../lib/mongoDb/connect";
import HighlightedBlog from "../HighlightedBlog/HighlightedBlog";
import styles from "./NewSection.module.scss";
import Link from "next/link";
import MiniSearch from 'minisearch'

export default async function NewSection({type,range}) {
  const res = await getBlogsMetaData(type);
  const arr = await res.map((ele) => {

    return <Link key={ele._id} href = {`/blog/${ele._id}`} > <HighlightedBlog  {...ele} /></Link> 
    } ).toArray();
    res.close()

  
  return (
    <div className={styles.newSection}>
      {/* <div className={styles.newSectionText} >New</div> */}
      <div className={styles.content}>
        {!range && arr.slice(0,5)}
        {range && arr.slice(range.start,range.start + range.length)}
      </div>
    </div>
  )
}
async function getBlogsMetaData(type) {
  const {collection} = await connect(type);

  const res = collection.find().sort({ "date": -1 });
  return res;
}

