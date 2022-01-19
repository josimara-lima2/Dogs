import React from 'react'
import styles from './FeedPhotoItem.module.css'

const FeedPhotoItem = ({photo, setModalPhoto}) => {

  function handleClick(){
    setModalPhoto(photo)
    console.log(photo)
  }
  return <li className={styles.photo} onClick={handleClick}>
          <img src={photo.src} alt={photo.title}></img>
          <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
}

export default FeedPhotoItem