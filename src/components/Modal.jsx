import React, { useState } from 'react'
import styles from './Modal.module.css'
import { Icon } from '@iconify/react';

const Modal = ({setModal, setNotas}) => {
    let [autor, setAutor] = useState();
    let [body, setTexto] = useState();
  return (
    <>
    <div className={styles.backdrop}></div>
    <div className={styles.modal}>
        <div className={styles.icon}>
        <Icon icon="material-symbols:close" onClick={()=>{setModal(false)}}/>
        </div>
        <div className={styles.forms}>
            <label htmlFor="autor">Autor</label>
            <input type="text" autoComplete='off' name='autor' placeholder='Quien es el autor?' onChange={(e) =>{setAutor(e.target.value)}}/>
            <label htmlFor="texto">Contenido</label>
            <textarea name="texto" id="" placeholder='La nota' onChange={(e) => {setTexto(e.target.value)}}></textarea>
        </div>
        <div className={styles.button}>
            <button onClick={()=>{setNotas({autor, body}); setModal(false)}}>Enviar</button>
        </div>
    </div>
    </>
  )
}

export default Modal