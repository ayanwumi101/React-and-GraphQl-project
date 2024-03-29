import React, {useContext, useState} from 'react'
import styles from './styles.module.css'
import { FaSearch } from 'react-icons/fa'
import {MovieContext} from '../../App'

const Search = () => {
  const genres = ['All', 'Action', 'Comedy', 'Love', 'Drama', 'Adventure'];
  const [position, setPosition] = useState(-1);
  const [filtered, updateFiltered] = useContext(MovieContext)
  
  const handleClick = (index) => {
      setPosition(index);
  }
  
  return (
    <>
        <div className={styles.search_container}>
            <input type="text" onChange={updateFiltered} className={styles.input} placeholder='Search Animes by Genres.....' />
            <FaSearch className={styles.search_icon} />
        </div>
    
          {/* <div className={styles.filters}>
            <button>All</button>
            <button>Action</button>
            <button onClick={() => showComedy()}>Comedy</button>
            <button>Adventure</button>
            <button>Drama</button>
            <button>Fantasy</button>
          </div> */}
    </>
  )
}

export default Search