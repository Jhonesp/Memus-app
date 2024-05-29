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
          <Nota key={index} id={nota._id} autor={nota.autor} texto={nota.body} deleteNota={deleteNota}/>
          ))}
      </div>}
        { fetching && (
          <div className={styles.empty}>
              <div className={styles.loader}>
                <div className={styles.jimu_primary_loading}></div>
              </div>
          </div>
        )

        }
    </>
  )
}

export default NotasContainer