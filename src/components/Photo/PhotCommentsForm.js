import React from 'react'
import { COMMENT_POST } from '../../api'
import {ReactComponent as Enviar} from '../../Assets/enviar.svg'
import useFetch from '../../hooks/useFetch'
import Error from '../Helper/Error'
const PhotCommentsForm = ({id, setComments}) => {
  const { error, request} = useFetch()
  const [comment, setComment] = React.useState('')

  async function handleSubmit(event){
    event.preventDefault();
    const token = window.localStorage.getItem('token')
    const {url, options} = COMMENT_POST(id,{comment},token)
    const {response, json} = await request(url, options)
    if(response.ok){
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
      id="comment"
      name="comment"
      placeholder="Comente..."
        value={comment}
        onChange={({target}) => setComment(target.value)}
      ></textarea>
      <button><Enviar/></button>
      <Error error={error}/>
    </form>
  )
}

export default PhotCommentsForm