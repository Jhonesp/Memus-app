import React from 'react'
import styles from './NotaContainer.module.css'
import Nota from './Nota'

const NotasContainer = ({notas, deleteNota, fetching}) => {
  function isNotasEmpty(){
    if(notas.length==0)
      return true;
    else return false;    
  }
  return (
    <>
      { !fetching && isNotasEmpty() ? 
      <div className={styles.empty}>
          <h3>No tienes notas</h3>
          <h4>Escribe una! </h4>
      </div>: 
      <div className={styles.container}>
        {notas.map((nota, index) => (
          <Nota key={index} id={index} autor={nota.autor} texto={nota.body} deleteNota={deleteNota}/>
          ))}
      </div>}
        { fetching && (
          <div className={styles.empty}>
              <h3>Cargando notas... !</h3>
          </div>
        )

        }
    </>
  )
}

export default NotasContainer