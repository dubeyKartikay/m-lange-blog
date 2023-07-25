import React from 'react'
import NewSection from '../../../components/NewSection/NewSection'
import styles from "../../../styles/app/section/page.module.scss"
export default function PagedDevLogs({params}) {
  const start = Number(params.pageNo) * 10 -10;
  const length = 10;
  return (
    <div>
      <h1 className={styles.heading} > Dev Logs </h1>
      <NewSection type="devlogs" range={{start : start , length : length}}/> 
    </div>
  )
}