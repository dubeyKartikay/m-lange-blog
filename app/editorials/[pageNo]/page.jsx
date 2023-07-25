import React from 'react'
import NewSection from '../../../components/NewSection/NewSection'
import styles from "../../../styles/app/section/page.module.scss"
export default function PagedEditorial({params}) {
  const length = 1;
  const start = Number(params.pageNo) * length -length;
  return (
    <div>
      <h1 className={styles.heading} > Editorials </h1>
      <NewSection type="editorials" range={{start : start , length : length}}/> 
    </div>
  )
}