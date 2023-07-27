import React from 'react'
import styles from "../../../styles/app/sections/sections.module.scss"
import NewSection from '../../../components/NewSection/NewSection'
export default function Devlogs({params}) {
  const page = ! Number.isInteger(Number(params.pageNo)) ? 1 : Number(params.pageNo) > 0 ? Number(params.pageNo) : 1 ;

  return (
    <div>
        <h1 className={styles.heading} > Dev Logs </h1>
        <NewSection link = 'devlogs' type='devlogs' page={page} limit={10}/>
    </div>
  )
}
