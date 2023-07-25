import React from 'react'
import NewSection from '../../../components/NewSection/NewSection'
import styles from "../../../styles/app/section/page.module.scss"
export default function PagedGameDes({params}) {
  const start = Number(params.pageNo) * 10 -10;
  const length = 10;
  return (
    <div>
      <h1 className={styles.heading} > Game Design </h1>
      <NewSection type="blogs" range={{start : start , length : length}}/> 
    </div>
  )
}