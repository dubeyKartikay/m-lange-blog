import connect from "../../lib/mongoDb/connect";

export default async function NewSection() {
  const collection = await connect();
  const res =  collection.find().sort({"date": -1}).limit(4);
  res.forEach((ele)=>{
    console.log(ele);
  })
  // console.log(res);
  return (
    <div>NewSection</div>
  )
}
