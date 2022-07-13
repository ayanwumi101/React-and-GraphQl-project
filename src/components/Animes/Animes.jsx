import React, { useContext, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { MovieContext } from '../../App'
import Anime from '../Anime/Anime'
import styles from './styles.module.css'



const Animes = () => {
  const {search} = useContext(MovieContext)
  return (
  
      
        <>
          <p>Launch Date</p>
          <div>
            {search.map((item) => <Anime item={item} key={item.id} />)}
          </div>
        </>
    
    
  )
}

export default Animes