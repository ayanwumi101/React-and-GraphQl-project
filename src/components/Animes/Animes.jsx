import React, { useContext, useState } from 'react'
import { MovieContext } from '../../App'
import Anime from '../Anime/Anime'
import styles from './styles.module.css'



const Animes = () => {
<<<<<<< HEAD
  const [filtered] = useContext(MovieContext)
=======
  const [filtered, updateFiltered] = useContext(MovieContext)
>>>>>>> 6c5460f9cc4f76cfadebda46d80acf74c6577576
  return (
        <>
          <div>
            {filtered.map((item) => <Anime item={item} key={item.id} />)}
          </div>
        </>
    
    
  )
}

export default Animes