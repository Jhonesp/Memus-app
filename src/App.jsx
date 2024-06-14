import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import NotasContainer from './components/NotasContainer'
import Fondo from './components/Fondo'
import Modal from './components/Modal'
import Footer from './components/Footer'

function App() {
  let [isModal, setModal] = useState(false);
  let [notas, setNotas] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const posts_URL = 'https://dummy-backend-omega.vercel.app';

  async function fetchPosts(){
    setFetching(true);
    const response = await fetch(posts_URL+'/posts');
    const resData = await response.json();
    setNotas(resData.posts);
    setFetching(false)
  }

  useEffect(() => {    
    fetchPosts();
  }, [])

  async function agregarNota(nota){
    await fetch(posts_URL+'/posts',{
      method: 'POST',
      body: JSON.stringify(nota),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await fetchPosts();
  };

  async function deleteNota(id){
    await fetch(posts_URL+'/delete/'+id,{
      method: 'DELETE'
    })
    fetchPosts();
  }

  return (
    <>
    <div className={styles.container}>
        <Header setModal={setModal}/>
        <NotasContainer notas={notas} deleteNota={deleteNota} fetching={isFetching}/>
        {isModal && (<Modal setModal={setModal} setNotas={agregarNota}/>)}
        <Footer />
        <Fondo />
    </div>
    
    </>
  )
}

export default App
