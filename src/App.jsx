import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import NotasContainer from './components/NotasContainer'
import Fondo from './components/Fondo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className={styles.container}>
        <Header />
        <NotasContainer />
        <Fondo />
    </div>
    
    </>
  )
}

export default App
