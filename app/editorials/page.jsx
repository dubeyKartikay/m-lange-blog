import React from 'react'
import styles from "../../styles/app/editorials/page.module.scss"
import NewSection from '../../components/NewSection/NewSection'
export default function Editorials() {
  return (
    <div>
        <h1 className={styles.heading}> Editorials </h1>
        <NewSection type='editorials'/>
    </div>
  )
}
