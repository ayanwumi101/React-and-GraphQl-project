import React from 'react'
import styles from './styles.module.css'


const Anime = ({item}) => {
  console.log(item);
  return (
    <>
          <div className={styles.launch_container}>
            <div className={styles.launch_name}>
              <h3>{item.title.english}</h3>
            </div>
                  
            <div className={styles.details}>
              <div className={styles.description}>
                <p>Format : {item.format}</p>
              </div>
              <button>See Details</button>
            </div>
              
          </div>
        
    </>
  )
}

export default Anime