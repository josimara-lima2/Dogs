import React from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../url'
import Input from '../Forms/Input'

const LoginForm = () => {
  const [username, setUsername] = React.useState('') 
  const [password, setPassword] = React.useState('')

  function handleSubmit(e){
    e.preventDefault()
    fetch(`${BaseUrl}jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({username, password}),
    }
    ).then(response => response.json()).then(json => console.log(json))
  }
  return (
    <section>
      <h1>Login</h1>
      <form  onSubmit={handleSubmit}>
        <Input label="usuário" />
        <input 
          type="text" 
          value={username}
          onChange={({target}) => setUsername(target.value)}
        />
         <input 
          type="text" 
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
