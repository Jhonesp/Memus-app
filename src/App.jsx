import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import NotasContainer from './components/NotasContainer'
import Fondo from './components/Fondo'
import Modal from './components/Modal'

function App() {
  let [isModal, setModal] = useState(false);
  let [notas, setNotas] = useState([]);
  const agregarNota = (nota) => {
    setNotas([...notas, nota]);
  };
  const deleteNota =(id) => {
    const newNotas = notas.filter((nota, i) => i !== id);
    setNotas(newNotas);
    console.log(notas);
  }

  return (
    <>
    <div className={styles.container}>
        <Header setModal={setModal}/>
        <NotasContainer notas={notas} deleteNota={deleteNota}/>
        {isModal && (<Modal setModal={setModal} setNotas={agregarNota}/>)}
        <Fondo />
    </div>
    
    </>
  )
}

export default App
