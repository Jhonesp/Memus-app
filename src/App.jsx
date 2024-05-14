import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import NotasContainer from './components/NotasContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className={styles.container}>
        <Header />
        <NotasContainer />
    </div>
    <div className={styles.area} >
            <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </>
  )
}

export default App
