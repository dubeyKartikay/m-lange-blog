import React from 'react'
import styles from "../../../styles/app/sections/sections.module.scss"
import NewSection from '../../../components/NewSection/NewSection'
import Link from 'next/link';
export default async function Editorials({params}) {
  const page = ! Number.isInteger(Number(params.pageNo)) ? 1 : Number(params.pageNo) > 0 ? Number(params.pageNo) : 1 ;
  return(
    <div>
        <h1 className={styles.heading}> Editorials </h1>
        <NewSection link = "editorials" type='editorials' page={page} limit={10}/>       
    </div>
  )
}
