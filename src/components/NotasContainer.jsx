import React from 'react'
import styles from './NotaContainer.module.css'
import Nota from './Nota'

const NotasContainer = ({notas, deleteNota}) => {
  
  return (
    <div className={styles.container}>
        {notas.map((nota, index) => (
            <Nota key={index} id={index} autor={nota.autor} texto={nota.descripcion} deleteNota={deleteNota}/>
        ))}
    </div>
  )
}

export default NotasContainer