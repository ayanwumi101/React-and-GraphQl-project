import React, {useContext, useState} from 'react'
import styles from './styles.module.css'
import { FaSearch } from 'react-icons/fa'
import {MovieContext} from '../../App'

const Search = () => {
  const genres = ['All', 'Action', 'Comedy', 'Love', 'Drama', 'Adventure'];
  const [position, setPosition] = useState(-1);
  const {data, search, setSearch} = useContext(MovieContext)
  
  const handleClick = (index) => {
      setPosition(index);
  }

  setSearch(data.Page.media)
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = search.filter((item) => item.format.startsWith(e.target.value));
    if (filtered.length === 0) {
            setSearch(-1)
        } else if (e.target.value.length === 0) {
            setSearch(data)
        } else {
            setSearch(filtered)
        }
  }
  
  return (
    <>
        <div className={styles.search_container}>
            <input type="text" onChange={handleSearch} className={styles.input} placeholder='Search Animes by Genres.....' />
            <FaSearch className={styles.search_icon} />
        </div>
    
          <div className={styles.filters}>
              {genres.map((item, index) => <button onClick={() => handleClick(index)} className={index === position ? `${styles.active}` : null} key={index}>{ item }</button>)}
          </div>
    </>
  )
}

export default Search