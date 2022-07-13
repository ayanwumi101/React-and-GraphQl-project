import React, { useContext } from 'react'
// import { useQuery, gql } from '@apollo/client';
import styles from './styles.module.css'


const Anime = ({item}) => {
  console.log(item);
  // const {data} = useContext(MovieContext)
  // const { title, format, description } = item;
//   const MOVIES_QUERY = gql`{
//   Page {
//     media {
//       siteUrl
//       title {
//         english
//         native
//       }
//       description
//       id
//       format
//       genres
//     }
//   }
// }`


// const { data, loading, error } = useQuery(MOVIES_QUERY);
  
//   if (loading) {
//     return "loading..."
//   }

//   if (error) {
//     return <div>
//         <p>{error.message}</p>
//     </div>
//   }

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