import React, { useState, createContext, useEffect }from 'react'
import Animes from './components/Animes/Animes'
import Search from './components/Search/Search'
import styles from './App.module.css';
import { useQuery, gql } from '@apollo/client';

export const MovieContext = React.createContext();

const App = () => {

const MOVIES_QUERY = gql`{
  Page { 
    media {
      siteUrl
      title {
        english
        native
      }
      description
      id
      format
      genres
    }
  }
}`

  
  const { data, loading, error } = useQuery(MOVIES_QUERY);
  
  const [filtered, setFiltered] = useState([]);
  const [position, setPosition] = useState(-1);
  
  
  useEffect(() => {
    if (data) {
      setFiltered(data.Page.media)
    }
  }, [data, loading])

  const updateFiltered = (e) => {
    const newData = data.Page.media.filter((item) => item.format.toLowerCase().startsWith(e.target.value.toLowerCase()));
    setFiltered(newData);
  }


  if (loading) {
    return "loading..."
  }

  if (error) {
    return <div>
        <p>{error.message}</p>
    </div>
  }
  

  return (
    <div className={styles.app}>
      <div className={styles.heading}><h1>Animes List</h1></div>
      <MovieContext.Provider value={[filtered, updateFiltered, position, setFiltered]}>
        <Search />
        <Animes />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
