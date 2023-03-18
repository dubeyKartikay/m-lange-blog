import connect from "../../lib/mongoDb/connect";
import HighlightedBlog from "../HighlightedBlog/HighlightedBlog";
import styles from "./NewSection.module.scss";
export default async function NewSection() {
  const collection = await connect();
  const res =  collection.find().sort({"date": -1}).limit(4);
  const arr = await res.map((ele) => {
    return <HighlightedBlog key={ele._id} {...ele} />
    } ).toArray();

  // console.log(arr);
  // console.log(res);
  return (
    <div className={styles.newSection}>
      <div>NewSection</div>
      <div className={styles.content}>
        {arr}
      </div>
    </div>
  )
}
