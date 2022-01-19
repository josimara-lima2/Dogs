import React from 'react'
import UserContext from '../../UserContext'
import PhotCommentsForm from './PhotCommentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const {login} = React.useContext(UserContext)

  return (
    <>
      <ul className={styles.comment}>
        {comments.map(comment => <li key={`${comment.id ? comment.id : Math.random()}`}><b>{comment.comment_author}:
         <span>{comment.comment_content}</span></b></li>)}
      </ul>
      {login && <PhotCommentsForm  setComments={setComments} id={props.id} />}
    </>
  )
}

export default PhotoComments
