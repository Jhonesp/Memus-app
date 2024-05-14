import React from 'react'
import styles from './NotaContainer.module.css'
import Nota from './Nota'

const NotasContainer = ({notas}) => {
  return (
    <div className={styles.container}>
        {notas.map((nota, index) => (
            <Nota key={index} autor={nota.autor} texto={nota.descripcion}/>
        ))}
    </div>
  )
}

export default NotasContainer