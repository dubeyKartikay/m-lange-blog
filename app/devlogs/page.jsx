import React from 'react'
import styles from "../../styles/app/devlogs/page.module.scss"
import NewSection from '../../components/NewSection/NewSection'
export default function Devlogs() {
  return (
    <div>
        <h1 className={styles.heading} > Dev Logs </h1>
        <NewSection type='devlogs' />
    </div>
  )
}
