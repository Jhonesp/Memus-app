import React from 'react'
import styles from './NotaContainer.module.css'
import Nota from './Nota'

const NotasContainer = () => {
  return (
    <div className={styles.container}>
        <Nota texto={"hola"}/>
    </div>
  )
}

export default NotasContainer