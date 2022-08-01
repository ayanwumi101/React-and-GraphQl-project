import React, { useContext, useState } from 'react'
import { MovieContext } from '../../App'
import Anime from '../Anime/Anime'
import styles from './styles.module.css'



const Animes = () => {
  const [filtered] = useContext(MovieContext)
  return (
  
      
        <>
          <div>
            {filtered.map((item) => <Anime item={item} key={item.id} />)}
          </div>
        </>
    
    
  )
}

export default Animes