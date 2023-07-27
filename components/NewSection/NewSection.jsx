import connect from "../../lib/mongoDb/connect";
import HighlightedBlog from "../HighlightedBlog/HighlightedBlog";
import styles from "./NewSection.module.scss";
import Link from "next/link";
export default async function NewSection({type,page,limit,link}) {
  const {res,hasNext} = await getBlogsMetaData(type,page,limit);
  // if(!hasNext){
  //   hideNextIfNoNextPages();
  // }
  const arr = res.map((ele) => {
    return <Link key={ele._id} href = {`/blog/${ele._id}`} > <HighlightedBlog  {...ele} /></Link> 
    } );

  
  // console.log(arr);
  // console.log(res);
  return (
    <div className={styles.newSection}>
        <div className={styles.linksContainer} >
          {page >1 && <Link className={styles.links} href={`${link}/${page-1}`} > Prev </Link>}
          { hasNext && <Link className={styles.links}  href={`${link}/${page+1}`} > Next </Link>}
        </div>
      <div className={styles.content}>
        {arr}
      </div>
      <div className={styles.linksContainer} >
          {page >1 && <Link className={styles.links} href={`${link}/${page-1}`} > Prev </Link>}
          { hasNext && <Link className={styles.links}  href={`${link}/${page+1}`} > Next </Link>}
        </div>
    </div>
  )
}
async function getBlogsMetaData(type,page = 1, limit = 10) {
  const {collection} = await connect(type);
  const skip = (page-1)*limit;
  const query = collection.find().sort({ "date": -1 }).skip(skip).limit(limit);
  const res= await query.toArray()
  const nextQuery = collection.find().sort({ "date": -1 }).skip(skip+limit).limit(limit);
  const hasNext = await nextQuery.hasNext();
  query.close();
  return {res,hasNext};
}

