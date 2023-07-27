import React from 'react'
import styles from "../../../styles/app/sections/sections.module.scss"
import NewSection from '../../../components/NewSection/NewSection'
export default async function GameDes({params}) {
  const page = ! Number.isInteger(Number(params.pageNo)) ? 1 : Number(params.pageNo) > 0 ? Number(params.pageNo) : 1 ;
  return(
    <div>
        <h1 className={styles.heading}> Game Design </h1>
        <NewSection link = "gamedes" type='blogs' page={page} limit={10}/>       
    </div>
  )
}
